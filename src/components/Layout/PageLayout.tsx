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
import Navbar from "@components/Navbar";
import Seo from "@components/SEO";
import Tooltip from "@components/Tooltip";

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
                  <Navbar.Item id="articles" internal>
                    <Link to="/articles">Articles</Link>
                  </Navbar.Item>
                  <Navbar.Item id="readme" internal>
                    <Link to="/readme">README</Link>
                  </Navbar.Item>
                  <Navbar.Item id="projects" internal>
                    <Link to="/projects">Projects</Link>
                  </Navbar.Item>
                </Navbar.ItemGroup>
                <Navbar.ItemGroup id="nav-right">
                  <Tooltip text="Github" position="bottom-right">
                    <Navbar.Item id="github" icon>
                      <a href="https://github.com/richardnguyen99/richardhnguyen.com">
                        <SVG.Github />
                      </a>
                    </Navbar.Item>
                  </Tooltip>
                  <Tooltip text="RSS" position="bottom-center">
                    <Navbar.Item id="rss" icon>
                      <SVG.RSS size={16} />
                    </Navbar.Item>
                  </Tooltip>
                  <Tooltip text="Toggle theme" position="bottom-left">
                    <Navbar.Item id="theme" icon>
                      <SVG.Sun size={16} />
                    </Navbar.Item>
                  </Tooltip>
                </Navbar.ItemGroup>
              </Navbar.Nav>
            </Navbar>
          </Navbar.Wrapper>
          {children}
        </Navbar.Provider>
      </RootLayout>
    </main>
  );
};

export default PageLayout;
