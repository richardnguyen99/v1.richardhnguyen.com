/**
 * React component to hold <Navbar.Item /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import { NavbarProps } from "./type";
import { StyledNavbarNav } from "./style";

const NavbarNav: React.FC<NavbarProps> = ({ children, ...rest }) => {
  return <StyledNavbarNav {...rest}>{children}</StyledNavbarNav>;
};

export default NavbarNav;
