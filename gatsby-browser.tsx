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

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props,
}) => {
  return (
    // Fix this one
    <RootLayout pageContext={props.pageContext as { lang: string }}>
      {element}
    </RootLayout>
  );
};
