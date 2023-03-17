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
  async ({ actions, stage, loaders }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "@pages": path.resolve(__dirname, "src", "pages"),
          "@components": path.resolve(__dirname, "src", "components"),
          "@assets": path.resolve(__dirname, "src", "assets"),
        },
      },
    });
  };
