/**
 * React component for layout pages
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { Link } from "gatsby";

import { PageLayoutPropsWithChildren } from "./type";
import RootLayout from "./RootLayout";

import Utility from "@components/Utility";
import Navbar from "@components/Navbar";
import Seo from "@components/SEO";

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
        <Navbar.Provider>
          <Navbar.Wrapper>
            <Navbar>
              <Navbar.Brand />
              <Navbar.Nav>
                <Navbar.ItemGroup id="nav-left">
                  <Navbar.Item id="articles">
                    <Link to="/articles">Articles</Link>
                  </Navbar.Item>
                  <Navbar.Item id="about">
                    <Link to="/about">About</Link>
                  </Navbar.Item>
                  <Navbar.Item id="projects">
                    <Link to="/projects">Projects</Link>
                  </Navbar.Item>
                </Navbar.ItemGroup>
                <Navbar.ItemGroup id="nav-right">
                  <Navbar.Item>Github</Navbar.Item>
                  <Navbar.Item>RSS</Navbar.Item>
                  <Navbar.Item>Theme</Navbar.Item>
                </Navbar.ItemGroup>
              </Navbar.Nav>
            </Navbar>
          </Navbar.Wrapper>
          <Utility.Container {...rest}>{children}</Utility.Container>
        </Navbar.Provider>
      </RootLayout>
    </main>
  );
};

export default PageLayout;
