import * as React from "react";
import { StyledNavbar } from "./style";
import { NavbarProps } from "./type";

const NAVBAR_NORMAL_SIZE = 64;
const NAVBAR_SHRINK_SIZE = 52;

const Navbar: React.FC<NavbarProps> = ({ children, ...rest }) => {
  const navbarRef = React.useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = React.useState(false);

  const onUserScroll = React.useCallback(() => {
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
    window.addEventListener("scroll", onUserScroll);

    return () => {
      window.removeEventListener("scroll", onUserScroll);
    };
  }, [onUserScroll]);

  return (
    <StyledNavbar ref={navbarRef} className={scrolled && "scrolled"} {...rest}>
      {children}
    </StyledNavbar>
  );
};

export default Navbar;
