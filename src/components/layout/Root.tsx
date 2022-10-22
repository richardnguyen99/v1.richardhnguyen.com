/**
 * Root layout that contains all configurations and global context
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

import GlobalStyle from "@components/GlobalStyle";
import { Locale } from "@contexts";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  pageContext: {
    lang: string;
  };
};

const RootLayout: React.FC<Props> = ({ children, pageContext }) => {
  return (
    <>
      <GlobalStyle />
      <Locale.Provider lang={pageContext.lang}>{children}</Locale.Provider>
    </>
  );
};

export default RootLayout;
