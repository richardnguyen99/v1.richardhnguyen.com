/**
 * Support for Typescript
 *
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#gatsby-nodets
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#requireresolve
 */

import path from "path";
import { GatsbyNode } from "gatsby";

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
      },
    },
  });
};
