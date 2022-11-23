/**
 * A React component for navigating between pages.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

import { CFC } from "@config/react";
import Tooltip from "@components/Tooltip/Tooltip";

import Svg from "./Svg";
import { Github } from "../Icon/Github";
import { RSS } from "../Icon/RSS";
import { Moon } from "../Icon/Moon";
import Button from "../Button";
import {
  StyledNavbar,
  StyledNavbarContainer as Container,
  StyledNavbarNav as Nav,
  StyledNavbarWrapper as Wrapper,
  StyledNavbarBrand as Brand,
  StyledNavbarTabList as NavList,
  StyledNavbarIconList as IconList,
  StyledNavbarListIconContainer as IconContainer,
  StyledNavbarListItem as Item,
  StyledNavbarListLink as ItemLink,
  StyledNavbarCollapse as Collapse,
} from "./style";
import { ThreeBars } from "../Icon/ThreeBars";

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
              <Tooltip text="Github">
                <Button
                  href="https://github.com/richardnguyen99/richardhnguyen.com"
                  transparent
                >
                  <Github />
                </Button>
              </Tooltip>
              <Tooltip text="RSS">
                <Button transparent>
                  <RSS />
                </Button>
              </Tooltip>
              <Tooltip text="Theme">
                <Button transparent>
                  <Moon />
                  Light
                </Button>
              </Tooltip>
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
