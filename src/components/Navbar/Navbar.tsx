import * as React from "react";
import { StyledNavbar } from "./style";
import { NavbarProps } from "./type";

const Navbar: React.FC<NavbarProps> = ({ children, ...rest }) => {
  return <StyledNavbar {...rest}>{children}</StyledNavbar>;
};

export default Navbar;
