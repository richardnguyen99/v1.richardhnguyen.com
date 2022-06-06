/**
 * Support for Typescript
 *
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#gatsby-nodets
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#requireresolve
 */

import path from "path";
import { GatsbyNode } from "gatsby";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = async ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@mixins": path.resolve(__dirname, "src", "mixins"),
        "@hooks": path.resolve(__dirname, "src", "hooks"),
        "@components": path.resolve(__dirname, "src", "components"),
        "@pages": path.resolve(__dirname, "src", "pages"),
        "@styles": path.resolve(__dirname, "src", "styles"),
        "@generated": path.resolve(__dirname, "src", "generated"),
      },
    },
  });
};

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: "/using-dsg",
    component: path.resolve("./src/templates/using-dsg.tsx"),
    context: {},
    defer: true,
  });
};
