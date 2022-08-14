/**
 * A React component to display the main footer and all the footer information
 * and details.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import { FooterProps } from "./type";
import {
  StyledFooterWrapper,
  StyledFooter,
  StyledFooterContainer,
  StyledFooterGrid,
  StyledFooterGridColumn,
  StyledFooterCopyright,
  StyledFooterGridColumnTitle,
  StyledFooterGridColumnList,
  StyledFooterGridColumnItem,
} from "./style";

import Utility from "@components/Utility";
import { NavbarContext } from "@components/Navbar/context";

const Footer: React.FC<FooterProps> = ({ children: _children, ...rest }) => {
  const navbarContext = React.useContext(NavbarContext);

  const matchPageWithColor = (tab: string) => {
    const pageToColor = {
      articles: "green",
      readme: "red",
      projects: "indigo",
    };

    return tab === "" ? "blue" : pageToColor[tab];
  };

  return (
    <StyledFooterWrapper
      className={matchPageWithColor(navbarContext.activeTab)}
      {...rest}
    >
      <Utility.Container>
        <StyledFooter>
          <StyledFooterContainer>
            <StyledFooterGrid>
              <StyledFooterGridColumn>
                <StyledFooterGridColumnTitle>
                  Articles
                </StyledFooterGridColumnTitle>
                <StyledFooterGridColumnList>
                  <StyledFooterGridColumnItem>
                    Tutorial
                  </StyledFooterGridColumnItem>
                  <StyledFooterGridColumnItem>
                    Explanation
                  </StyledFooterGridColumnItem>
                  <StyledFooterGridColumnItem>
                    Oversimplified
                  </StyledFooterGridColumnItem>
                </StyledFooterGridColumnList>
              </StyledFooterGridColumn>
              <StyledFooterGridColumn>
                <StyledFooterGridColumnTitle>
                  Popular tags
                </StyledFooterGridColumnTitle>
                <StyledFooterGridColumnList>
                  <StyledFooterGridColumnItem>C/C++</StyledFooterGridColumnItem>
                  <StyledFooterGridColumnItem>React</StyledFooterGridColumnItem>
                  <StyledFooterGridColumnItem>
                    Python
                  </StyledFooterGridColumnItem>
                </StyledFooterGridColumnList>
              </StyledFooterGridColumn>
              <StyledFooterGridColumn>
                <StyledFooterGridColumnTitle>About</StyledFooterGridColumnTitle>
                <StyledFooterGridColumnList>
                  <StyledFooterGridColumnItem>
                    Myself
                  </StyledFooterGridColumnItem>
                  <StyledFooterGridColumnItem>
                    Projects
                  </StyledFooterGridColumnItem>
                </StyledFooterGridColumnList>
              </StyledFooterGridColumn>
              <StyledFooterGridColumn>
                <StyledFooterGridColumnTitle>
                  Contact
                </StyledFooterGridColumnTitle>
                <StyledFooterGridColumnList>
                  <StyledFooterGridColumnItem>Email</StyledFooterGridColumnItem>
                  <StyledFooterGridColumnItem>
                    Github
                  </StyledFooterGridColumnItem>
                  <StyledFooterGridColumnItem>
                    LinkedIn
                  </StyledFooterGridColumnItem>
                  <StyledFooterGridColumnItem>
                    Twitter
                  </StyledFooterGridColumnItem>
                </StyledFooterGridColumnList>
              </StyledFooterGridColumn>
            </StyledFooterGrid>
            <StyledFooterCopyright>
              <div>© 2022 by richardhnguyen.com. All rights reserved.</div>
              <div>Privacy Policy &mdash; Legal Notice</div>
            </StyledFooterCopyright>
          </StyledFooterContainer>
        </StyledFooter>
      </Utility.Container>
    </StyledFooterWrapper>
  );
};

export default Footer;
