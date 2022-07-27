/**
 * React component for <Navbar.Brand />
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import { NavbarContext } from "./context";
import { StyledNavbarBrand } from "./style";

const NavbarBrand: React.FC = () => {
  const navbarContext = React.useContext(NavbarContext);

  const matchPageWithColor = (tab: string) => {
    const pageToColor = {
      articles: "green",
      about: "red",
      projects: "indigo",
    };

    return tab === "" ? "blue" : pageToColor[tab];
  };

  return (
    <StyledNavbarBrand
      pageColor={matchPageWithColor(navbarContext.activeTab)}
      to="/"
    >
      Richard H. Nguyen
    </StyledNavbarBrand>
  );
};

export default NavbarBrand;
