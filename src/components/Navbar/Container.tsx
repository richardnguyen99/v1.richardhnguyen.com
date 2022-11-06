/**
 * A React component for fixing an element's width to the current breakpoint.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

import { StyledNavbarContainer } from "./style";

import { CFC } from "@config/react";

const Container: CFC<HTMLDivElement> = ({ children, ...rest }) => {
  return (
    <StyledNavbarContainer aria-label="navbar-container" {...rest}>
      {children}
    </StyledNavbarContainer>
  );
};

export default Container;
