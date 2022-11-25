/**
 * Root layout that contains all configurations and global context
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

import { GlobalStyle } from "@components";
import { Locale } from "@contexts";
import { CFC } from "@config/react";

import type { LayoutProps } from "./type";

const RootLayout: CFC<HTMLElement, LayoutProps> = ({
  children,
  pageContext,
}) => {
  return (
    <>
      <GlobalStyle />
      <Locale.Provider lang={pageContext.lang}>{children}</Locale.Provider>
    </>
  );
};

export default RootLayout;
