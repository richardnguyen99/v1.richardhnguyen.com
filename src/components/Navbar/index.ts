/**
 * Index file for <Navbar /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import NavbarWrapper from "./NavbarWrapper";
import Navbar from "./Navbar";
import NavbarBrand from "./NavbarBrand";
import { StyledNavbarItemGroup, StyledNavbarNav, StyledNavbarItem } from "./style";

const exported = Object.assign(Navbar, {
  Wrapper: NavbarWrapper,
  Brand: NavbarBrand,
  Nav: StyledNavbarNav,
  ItemGroup: StyledNavbarItemGroup,
  Item: StyledNavbarItem,
});

export default exported;
