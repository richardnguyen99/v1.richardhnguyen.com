/**
 * Support for Typescript
 *
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#gatsby-nodets
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#requireresolve
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
  async ({ actions, _stage, _loaders }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "@pages": path.resolve(__dirname, "src", "pages"),
          "@hooks": path.resolve(__dirname, "src", "hooks"),
          "@components": path.resolve(__dirname, "src", "components"),
          "@assets": path.resolve(__dirname, "src", "assets"),
          "@views": path.resolve(__dirname, "src", "views"),
        },
      },
    });
  };

/**
 * @type {import("gatsby").GatsbyNode["onCreateNode"]}
 */
export const onCreateNode = ({ node, actions, getNode, reporter }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const content = node.body;

    try {
      const [excerpt, rawContent] = content.split(MDX_EXCERPT_SEPARATOR);

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

      createNodeField({
        node,
        name: "excerpt",
        value: excerpt,
      });
    } catch (error) {
      reporter.panicOnBuild(
        `Error processing Markdown ${
          node.absolutePath ? `file ${node.absolutePath}` : `in node ${node.id}`
        }:\n
      ${error.message}`
      );
    }

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
 * @type {import("gatsby").GatsbyNode["createPages"]}
 */
export const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query MdxNode {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            published
            tags
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

  const tagTemplate = path.resolve("./src/components/Tag/Template.tsx");
  const postTemplate = path.resolve("./src/components/Mdx/index.tsx");
  const posts = result.data.allMdx.nodes;

  const tags = posts.reduce((acc, node) => {
    if (!node.frontmatter.tags) return acc;

    node.frontmatter.tags.forEach((tag) => {
      acc.add(tag);
    });

    return acc;
  }, new Set());

  tags.add("python");

  posts.forEach((node) => {
    // Only render ready-to-publish posts in production.
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

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${tag}`,
      component: tagTemplate,
      context: { tag: tag },
    });
  });
};

/**
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
