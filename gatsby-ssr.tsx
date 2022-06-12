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

export const onRenderBody: GatsbySSR["onRenderBody"] = (
  { setPostBodyComponents },
  pluginOptions
) => {
  setPostBodyComponents([<div key="portal" id="modal" />]);
};

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => {
  return <>{element}</>;
};
