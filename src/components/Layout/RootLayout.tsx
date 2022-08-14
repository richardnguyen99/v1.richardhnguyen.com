/**
 * A React component to contain global configurations like styling and global context.
 * It will be used in both layouts, <PageLayout /> and <BlogLayout />
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import { LayoutPropsWithChildren } from "./type";
import GlobalStyle from "@components/GlobalStyle";

const RootLayout: React.FC<LayoutPropsWithChildren> = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  );
};

export default RootLayout;
