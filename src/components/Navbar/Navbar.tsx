/**
 * A React component for navigating between pages.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

import { StyledNavbar } from "./style";

import { CFC } from "@config/react";

const Navbar: CFC<HTMLDivElement> = ({ children, ...rest }) => {
  return (
    <StyledNavbar id="navbar" aria-label="navbar" {...rest}>
      {children}
    </StyledNavbar>
  );
};

export default Navbar;
