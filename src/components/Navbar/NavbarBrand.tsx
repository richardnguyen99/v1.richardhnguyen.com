/**
 * React component for <Navbar.Brand />
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { StyledNavbarBrand } from "./style";

const NavbarBrand: React.FC = () => {
  return <StyledNavbarBrand to="/">Richard H. Nguyen</StyledNavbarBrand>;
};

export default NavbarBrand;
