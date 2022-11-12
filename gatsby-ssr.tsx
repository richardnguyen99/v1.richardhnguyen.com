/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * @see https://www.gatsbyjs.com/docs/ssr-apis/

 * Support for Typescript
 *
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#gatsby-browsertsx--gatsby-ssrtsx
 */

import * as React from "react";
import type { GatsbySSR } from "gatsby";

import RootLayout from "./src/components/layout/Root";

export const onRenderBody: GatsbySSR["onRenderBody"] = (
  { setPostBodyComponents },
  _pluginOptions
) => {
  setPostBodyComponents([<div key="portal" id="modal" />]);
};

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({
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
