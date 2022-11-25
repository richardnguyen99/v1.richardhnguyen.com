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

import RootLayout from "./src/components/layout/Root";
import type { PageContext } from "./src/components/layout/type";

export const wrapPageElement: GatsbyBrowser<
  Record<string, unknown>,
  PageContext
>["wrapPageElement"] = ({ element, props }) => {
  return <RootLayout pageContext={props.pageContext}>{element}</RootLayout>;
};
