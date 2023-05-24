/**
 * Support for Typescript
 *
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#gatsby-nodets
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#requireresolve
 */

import path from "path";
import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";
import readingTime from "reading-time";

const MDX_EXCERPT_SEPARATOR = "{/* Except */}";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] =
  // This configuration will allow me to create a shortcut for each folder in
  // src/. Instead of adding a prefix "./src/something", now I can just use
  // "@something".
  async ({ actions, stage, loaders }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "@pages": path.resolve(__dirname, "src", "pages"),
          "@hooks": path.resolve(__dirname, "src", "hooks"),
          "@components": path.resolve(__dirname, "src", "components"),
          "@assets": path.resolve(__dirname, "src", "assets"),
        },
      },
    });
  };

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
  reporter,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const content = node.body as string;

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
      value: `${slug}`,
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
