/**
 * A React component for better SEO performance.
 *
 * This component is written based on the Gatsby Head API. More at
 * @see https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

import { SEOProps } from "./type";

const SEO: React.FC<SEOProps> = ({ title, description, children }) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    {children}
  </>
);

export default SEO;
