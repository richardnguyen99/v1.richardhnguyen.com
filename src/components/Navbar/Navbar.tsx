/**
 * A React component for navigating between pages.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

import { CFC } from "@config/react";
import { Tooltip, Icon, Button } from "@components";

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
import Dropdown from "@components/Dropdown";

const Navbar: CFC<HTMLDivElement> = ({ ...rest }) => {
  return (
    <StyledNavbar id="navbar" aria-label="navbar" {...rest}>
      <Container>
        <Wrapper>
          <Nav>
            <Brand to="/">
              <Icon.Brand />
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
              <Tooltip content="Github" placement="bottom-left">
                <Button
                  href="https://github.com/richardnguyen99/richardhnguyen.com"
                  transparent
                >
                  <Icon.Github />
                </Button>
              </Tooltip>
              <Tooltip content="RSS">
                <Button transparent>
                  <Icon.RSS />
                </Button>
              </Tooltip>
              <Tooltip content="Theme" placement="bottom-right">
                <Button transparent>
                  <Icon.Moon />
                  Light
                </Button>
              </Tooltip>
            </IconList>
            <Collapse>
              <Dropdown content="Menu">
                <Button transparent>
                  <Icon.ThreeBars />
                </Button>
              </Dropdown>
            </Collapse>
          </Nav>
        </Wrapper>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
