/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * @see https://www.gatsbyjs.com/docs/browser-apis/
 *
 * Support for Typescript
 *
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#gatsby-browsertsx--gatsby-ssrtsx
 */
import * as React from "react";
import { GatsbyBrowser } from "gatsby";

import "./fonts/fonts.css";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
  return <>{element}</>;
};
