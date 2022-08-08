/**
 * A React component to display the main navbar component as a container.
 *
 * @usage <Navbar />
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import { StyledNavbar } from "./style";
import { NavbarProps } from "./type";

const NAVBAR_NORMAL_SIZE = 64;

const Navbar: React.FC<NavbarProps> = ({ children, ...rest }) => {
  const navbarRef = React.useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = React.useState(false);

  const onScrollResize = React.useCallback(() => {
    if (
      document &&
      (document.body.scrollTop > NAVBAR_NORMAL_SIZE + 1 ||
        document.documentElement.scrollTop > NAVBAR_NORMAL_SIZE + 1)
    ) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", onScrollResize);

    return () => {
      window.removeEventListener("scroll", onScrollResize);
    };
  }, [onScrollResize]);

  return (
    <StyledNavbar ref={navbarRef} className={scrolled && "scrolled"} {...rest}>
      {children}
    </StyledNavbar>
  );
};

export default Navbar;
