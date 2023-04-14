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

import RootLayout from "./src/components/Layout/Root";
import ThemeProvider from "./src/components/Theme/Provider";

import "prismjs/themes/prism-tomorrow.css";
import "./fonts/fonts.css";
import "./src/styles/index.css";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <ThemeProvider>
      <RootLayout>{element}</RootLayout>
    </ThemeProvider>
  );
};
