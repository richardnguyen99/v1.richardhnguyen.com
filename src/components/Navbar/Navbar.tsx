/**
 * A React component for navigating between pages.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

import { CFC } from "@config/react";

import {
  StyledNavbar,
  StyledNavbarContainer as Container,
  StyledNavbarFlex as FlexContainer,
  StyledNavbarWrapper as Wrapper,
  StyledNavbarBrand as Brand,
} from "./style";
import Svg from "./Svg";

const Navbar: CFC<HTMLDivElement> = ({ children, ...rest }) => {
  return (
    <StyledNavbar id="navbar" aria-label="navbar" {...rest}>
      <Container>
        <Wrapper>
          <FlexContainer>
            <Brand to="/">
              <Svg />
            </Brand>
          </FlexContainer>
        </Wrapper>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
