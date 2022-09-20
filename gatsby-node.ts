/**
 * Support for Typescript
 *
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#gatsby-nodets
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#requireresolve
 */

import path from "path";
import { GatsbyNode } from "gatsby";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] =
  // This configuration will allow me to create a shortcut for each folder in
  // src/. Instead of adding a prefix "./src/something", now I can just use
  // "@something".
  async ({ actions }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "@mixins": path.resolve(__dirname, "src", "mixins"),
          "@hooks": path.resolve(__dirname, "src", "hooks"),
          "@components": path.resolve(__dirname, "src", "components"),
          "@contexts": path.resolve(__dirname, "src", "contexts"),
          "@pages": path.resolve(__dirname, "src", "pages"),
          "@styles": path.resolve(__dirname, "src", "styles"),
          "@generated": path.resolve(__dirname, "src", "generated"),
        },
      },
    });
  };

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  // This will create pages dynamically depending on what type of page I
  // specify.
  const { createPage } = actions;

  // The page component used to render the page and consume the data
  // accordingly.
  const tagTemplate = path.resolve("src/templates/tags.tsx");
  const result = await graphql(`
    query {
      allMdx(
        limit: 2000
        sort: { fields: [frontmatter___created], order: DESC }
      ) {
        totalCount
        edges {
          node {
            slug
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error while querying GraphQL");
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tags = (result.data as any).tagsGroup.group;

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${tag.fieldValue}`,
      component: tagTemplate,
      // context props will be used to pass down to graphql used by that page
      // as variables.
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
