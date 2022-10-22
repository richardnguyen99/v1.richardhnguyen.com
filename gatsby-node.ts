/**
 * Support for Typescript
 *
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#gatsby-nodets
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#requireresolve
 */

import path from "path";
import { GatsbyNode } from "gatsby";

import i18n from "./config/i18n";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  // This custom Webpack configuration allows shortcut for each folder in the
  // `src` directory so that "../../something" can be avoided.
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@mixins": path.resolve(__dirname, "src", "mixins"),
        "@components": path.resolve(__dirname, "src", "components"),
        "@pages": path.resolve(__dirname, "src", "pages"),
        "@hooks": path.resolve(__dirname, "src", "hooks"),
        "@utils": path.resolve(__dirname, "src", "utils"),
        "@contexts": path.resolve(__dirname, "src", "contexts"),
      },
    },
  });
};

export const onCreatePage: GatsbyNode["onCreatePage"] = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  // Delete automatically-generated page
  deletePage(page);

  // Create the exact page with customized page context
  Object.keys(i18n).map((lang) => {
    //
    const pagePath = i18n[lang].default
      ? page.path
      : `${i18n[lang].path}${page.path}`;

    return createPage({
      ...page,
      path: pagePath,
      context: {
        ...page.context,
        lang,
        dateFormat: i18n[lang].dateFormat,
      },
    });
  });
};

export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "File" && node.extension === "json")
    createNodeField({ node, name: "lang", value: node.name });
};
