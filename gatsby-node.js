/**
 * Support for Typescript
 *
 * @see https://www.gatsbyjs.com/docs/
 */

//import path from "path";
//import type { GatsbyNode } from "gatsby";

const path = require("path");

exports.onCreateWebpackConfig = async ({ actions }) => {
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

// @ts-check

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.tsx"),
    context: {},
    defer: true,
  });
};
