/**
 * A React component to make the navbar sticky.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import { StyledNavbarWrapper } from "./style";
import { NavbarProps } from "./type";

const NavbarWrapper: React.FC<NavbarProps> = ({ children, ...rest }) => {
  return <StyledNavbarWrapper {...rest}>{children}</StyledNavbarWrapper>;
};

export default NavbarWrapper;
