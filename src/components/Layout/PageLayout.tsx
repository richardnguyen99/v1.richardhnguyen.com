/**
 * React component for layout pages
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import { PageLayoutPropsWithChildren } from "./type";
import RootLayout from "./RootLayout";

import Utility from "@components/Utility";
import Navbar from "@components/Navbar";
import Seo from "@components/SEO";
import NavbarBrand from "@components/Navbar/NavbarBrand";

const PageLayout: React.FC<PageLayoutPropsWithChildren> = ({
  title,
  className = "",
  children,
  ...rest
}) => {
  return (
    <main className={className}>
      <RootLayout>
        <Seo title={title} lang="en" />
        <Navbar.Wrapper>
          <Navbar>
            <NavbarBrand />
          </Navbar>
        </Navbar.Wrapper>
        <Utility.Container {...rest}>{children}</Utility.Container>
      </RootLayout>
    </main>
  );
};

export default PageLayout;
