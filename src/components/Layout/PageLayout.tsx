/**
 * React component for layout pages
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { Link } from "gatsby";

import { PageLayoutPropsWithChildren } from "./type";
import RootLayout from "./RootLayout";

import SVG from "@components/Svg";
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
                  <Navbar.Item id="github">
                    <SVG.Github />
                  </Navbar.Item>
                  <Navbar.Item id="rss">
                    <SVG.RSS size={16} />
                  </Navbar.Item>
                  <Navbar.Item id="theme">
                    <SVG.Sun size={16} />
                  </Navbar.Item>
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
