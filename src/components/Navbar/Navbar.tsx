/**
 * A React component for navigating between pages.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

import { CFC } from "@config/react";

import Svg from "./Svg";
import { Github } from "./Github";
import { RSS } from "./RSS";
import { Moon } from "./Moon";
import {
  StyledNavbar,
  StyledNavbarContainer as Container,
  StyledNavbarNav as Nav,
  StyledNavbarWrapper as Wrapper,
  StyledNavbarBrand as Brand,
  StyledNavbarTabList as NavList,
  StyledNavbarIconList as IconList,
  StyledNavbarListIcon as Icon,
  StyledNavbarListIconText as IconText,
  StyledNavbarListIconContainer as IconContainer,
  StyledNavbarListItem as Item,
  StyledNavbarListLink as ItemLink,
  StyledNavbarCollapse as Collapse,
} from "./style";
import { ThreeBars } from "./ThreeBars";

const Navbar: CFC<HTMLDivElement> = ({ ...rest }) => {
  return (
    <StyledNavbar id="navbar" aria-label="navbar" {...rest}>
      <Container>
        <Wrapper>
          <Nav>
            <Brand to="/">
              <Svg />
            </Brand>
            <NavList>
              <Item>
                <ItemLink to="#">Blog</ItemLink>
              </Item>
              <Item>
                <ItemLink to="#">About</ItemLink>
              </Item>
              <Item>
                <ItemLink to="#">Projects</ItemLink>
              </Item>
            </NavList>
            <IconList>
              <Icon>
                <IconContainer>
                  <a
                    target="_blank"
                    href="https://github.com/richardnguyen99/richardhnguyen.com"
                    rel="noreferrer"
                  >
                    <Github />
                  </a>
                </IconContainer>
              </Icon>
              <Icon>
                <IconContainer>
                  <RSS />
                </IconContainer>
              </Icon>
              <Icon>
                <IconContainer>
                  <Moon />
                  <IconText>Light</IconText>
                </IconContainer>
              </Icon>
            </IconList>
            <Collapse>
              <IconContainer>
                <ThreeBars />
              </IconContainer>
            </Collapse>
          </Nav>
        </Wrapper>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
