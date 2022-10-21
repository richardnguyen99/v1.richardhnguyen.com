/**
 * Type definitions for <SEO /> components
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import React, { HTMLAttributes } from "react";

/**
 * Use this type as the main definition for the parametric properties. It will
 * include with React.PropsWithChildren to make a complete type.
 */
export type BasedSEOProps = {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
};

export type SEOProps = BasedSEOProps &
  HTMLAttributes<HTMLHtmlElement> & {
    children?: React.ReactNode | React.ReactNode[];
  };
