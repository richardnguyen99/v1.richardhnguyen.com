/**
 * Prop types and interfaces for Layout and Template components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

export interface PageContext {
  lang: string;
}

export interface LayoutProps {
  children?: React.ReactNode | React.ReactNode[];
  pageContext: PageContext;
}
