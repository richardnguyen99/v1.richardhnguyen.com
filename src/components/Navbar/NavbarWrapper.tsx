import * as React from "react";
import { StyledNavbarWrapper } from "./style";
import { NavbarProps } from "./type";

const NavbarWrapper: React.FC<NavbarProps> = ({ children, ...rest }) => {
  return <StyledNavbarWrapper {...rest}>{children}</StyledNavbarWrapper>;
};

export default NavbarWrapper;
