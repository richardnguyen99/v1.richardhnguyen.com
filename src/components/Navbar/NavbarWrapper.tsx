/**
 * A React component to make the navbar sticky.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import { NavbarContext } from "./context";
import { StyledNavbarWrapper } from "./style";
import { NavbarProps } from "./type";

const NavbarWrapper: React.FC<NavbarProps> = ({ children, ...rest }) => {
  const { hideNavbar, hideNavbarOffset } = React.useContext(NavbarContext);

  return (
    <StyledNavbarWrapper
      style={{
        top: `-${hideNavbar && hideNavbarOffset}px`,
      }}
      {...rest}
    >
      {children}
    </StyledNavbarWrapper>
  );
};

export default NavbarWrapper;
