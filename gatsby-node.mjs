/**
 * Gatsby Node API for creating pages, slug, fields and other site
 * configurations
 */

import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createFilePath } from "gatsby-source-filesystem";
import { compileMDXWithCustomOptions } from "gatsby-plugin-mdx";
import readingTime from "reading-time";

import rehypeMetadataCodeblock from "./plugins/rehype-metadata-codeblock.mjs";

const MDX_EXCERPT_SEPARATOR = "{/* Except */}";
const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * @type {import("gatsby").GatsbyNode["onCreateWebpackConfig"]}
 */
export const onCreateWebpackConfig =
  // This configuration will allow me to create a shortcut for each folder in
  // src/. Instead of adding a prefix "./src/something", now I can just use
  // "@something".
  //
  // This is only for Gatsby as Webpack needs to know how to resolve the
  // aliases. For TypeScript, these are separately defined in tsconfig.json.
  async ({ actions, _stage, _loaders }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "@pages": path.resolve(__dirname, "src", "pages"),
          "@hooks": path.resolve(__dirname, "src", "hooks"),
          "@features": path.resolve(__dirname, "src", "features"),
          "@components": path.resolve(__dirname, "src", "components"),
          "@assets": path.resolve(__dirname, "src", "assets"),
          "@views": path.resolve(__dirname, "src", "views"),
        },
      },
    });
  };

/**
 * @description Create custom nodes based on other nodes
 *
 * @type {import("gatsby").GatsbyNode["onCreateNode"]}
 */
export const onCreateNode = ({ node, actions, getNode, reporter }) => {
  const { createNodeField } = actions;

  // MDX-related nodes
  if (node.internal.type === "Mdx") {
    const content = node.body;

    try {
      const [excerpt, rawContent] = content.split(MDX_EXCERPT_SEPARATOR);

      // Create custom `excerpt` field from the MDX content with custom
      // separator. It is used to briefly describe the related post.
      createNodeField({
        node,
        name: "excerpt",
        value: excerpt,
      });

      // The rest of the content is used to render the post.
      createNodeField({
        node,
        name: "markdownBody",
        value: rawContent,
      });

      createNodeField({
        node,
        name: "timeToRead",
        value: readingTime(rawContent),
      });
    } catch (error) {
      reporter.panicOnBuild(
        `Error processing Markdown ${
          node.absolutePath ? `file ${node.absolutePath}` : `in node ${node.id}`
        }:\n
      ${error.message}`
      );
    }

    // Create slug for each post. This doesn't actually create the path but give
    // each post a slug field so other components can use and navigate to it.
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: "slug",
      value: `/posts${slug}`,
    });
  }

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: "slug",
      value: `${slug}`,
    });
  }
};

/**
 * @description Create pages dynamically
 *
 * @type {import("gatsby").GatsbyNode["createPages"]}
 */
export const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // GraphQL query to get all the MDX nodes used to create pages
  const result = await graphql(`#graphql
    query MdxNode {
      allMdx {
        nodes {
          id

          # Create from _createNodeField_ in _onCreateNode_
          fields {
            slug
          }

          # Create from the frontmatter in MDX files. See MDX files for more.
          frontmatter {
            published       # Control whether a post is ready to be rendered
            tags            # Control post rendering based on tags
          }

          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors);
  }

  const tagTemplate = path.resolve("./src/components/Tag/TagTemplate.tsx");
  const postTemplate = path.resolve("./src/components/Mdx/index.tsx");
  const posts = result.data.allMdx.nodes;

  // Create a set of tags from all the posts.
  const tags = posts.reduce((acc, node) => {
    if (!node.frontmatter.tags) return acc;

    node.frontmatter.tags.forEach((tag) => {
      acc.add(tag);
    });

    return acc;
  }, new Set());

  // Predetermined tags - Might need to remove these after there are posts with
  // these tags.
  tags.add("c");
  tags.add("python");

  // Create pages for each post with the post template.
  posts.forEach((node) => {
    // Only render ready-to-publish posts in production. In development, not-
    // ready posts are still accessible through their paths.
    if (
      process.env.NODE_ENV === "production" &&
      node.frontmatter.published === false
    )
      return;

    createPage({
      path: `${node.fields.slug}`,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    });
  });

  //
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${tag}`,
      component: tagTemplate,
      context: { tag: tag },
    });
  });
};

/**
 * @description Create custom schema for MDX nodes
 *
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
export const createSchemaCustomization = async ({
  getNode,
  getNodesByType,
  pathPrefix,
  reporter,
  cache,
  actions,
  schema,
  store,
}) => {
  const { createTypes } = actions;

  const headingsResolver = schema.buildObjectType({
    name: "Mdx",
    fields: {
      headings: {
        type: "[MdxHeading]",
        async resolve(mdxNode) {
          const fileNode = getNode(mdxNode.parent);

          if (!fileNode) {
            return null;
          }

          const result = await compileMDXWithCustomOptions(
            {
              source: mdxNode.body,
              absolutePath: fileNode.absolutePath,
            },
            {
              pluginOptions: {},
              customOptions: {
                mdxOptions: {
                  rehypePlugins: [rehypeMetadataCodeblock],
                },
              },
              getNode,
              getNodesByType,
              pathPrefix,
              reporter,
              cache,
              store,
            }
          );

          if (!result) {
            return null;
          }

          return result.metadata.headings;
        },
      },
    },
  });

  createTypes([
    `#graphql
      type Mdx implements Node {
        timeToRead: Float @proxy(from: "fields.timeToRead.minutes")
        wordCount: Int @proxy(from: "fields.timeToRead.words")
      }

      type MdxHeading {
        value: String
        depth: Int
      }
    `,

    headingsResolver,
  ]);
};
