/**
 * React component items in navbar container <Navbar.Item />
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { useLocation } from "@reach/router";

import { NavbarContext } from "./context";
import { StyledNavbarItem } from "./style";
import { NavbarItemProps } from "./type";

const NavbarItem: React.FC<NavbarItemProps> = React.forwardRef<
  HTMLDivElement,
  NavbarItemProps
>(
  (
    {
      id = "",
      children,
      icon = false,
      internal = false,
      onClickCallback = null,
      onMouseEnterCallback = null,
      onMouseLeaveCallback = null,
      ...rest
    },
    ref
  ) => {
    const navbarContext = React.useContext(NavbarContext);

    const location = useLocation();
    const [active, setActive] = React.useState(false);

    React.useEffect(() => {
      if (internal) {
        const mainPath = location.pathname.split("/")[1];

        if (id === mainPath) {
          setActive(true);
          navbarContext.toggleActiveTab(id);
        } else {
          setActive(false);
        }
      }
    }, [id, internal, location, navbarContext]);

    return (
      <StyledNavbarItem
        id={id}
        ref={ref}
        className={active && "active"}
        {...rest}
        icon={icon}
        onClick={onClickCallback}
        onMouseLeave={onMouseLeaveCallback}
        onMouseEnter={onMouseEnterCallback}
      >
        {children}
      </StyledNavbarItem>
    );
  }
);
NavbarItem.displayName = "NavbarItem";

export default NavbarItem;
