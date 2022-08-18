/**
 * React component for layout pages
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { Link } from "gatsby";

import { PageLayoutProps } from "./type";
import RootLayout from "./RootLayout";

import SVG from "@components/Svg";
import Navbar from "@components/Navbar";
import Seo from "@components/SEO";
import Tooltip from "@components/Tooltip";
import Footer from "@components/Footer";

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  className = "",
  children,
  ...rest
}) => {
  return (
    <main className={className} {...rest}>
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
                  <Navbar.ThemeToggle />
                </Navbar.ItemGroup>
              </Navbar.Nav>
            </Navbar>
          </Navbar.Wrapper>
          {children}
          <Footer />
        </Navbar.Provider>
      </RootLayout>
    </main>
  );
};

export default PageLayout;
