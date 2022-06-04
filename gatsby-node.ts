/**
 * Support for Typescript
 *
 * @see https://www.gatsbyjs.com/docs/
 */

import path from "path";
import type { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  });
};

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = async ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@context": path.resolve(__dirname, "src", "context"),
        "@hooks": path.resolve(__dirname, "src", "hooks"),
        "@components": path.resolve(__dirname, "src", "components"),
        "@pages": path.resolve(__dirname, "src", "pages"),
        "@styles": path.resolve(__dirname, "src", "styles"),
        "@generated": path.resolve(__dirname, "src", "generated"),
      },
    },
  });
};
