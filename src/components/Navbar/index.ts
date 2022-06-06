/**
 * Index file for <Navbar /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import NavbarWrapper from "./NavbarWrapper";
import Navbar from "./Navbar";
import NavbarBrand from "./NavbarBrand";
import { StyledNavbarItemGroup, StyledNavbarNav } from "./style";
import NavbarProvider from "./context";
import NavbarItem from "./NavbarItem";

const exported = Object.assign(Navbar, {
  Provider: NavbarProvider,
  Wrapper: NavbarWrapper,
  Brand: NavbarBrand,
  Nav: StyledNavbarNav,
  ItemGroup: StyledNavbarItemGroup,
  Item: NavbarItem,
});

export default exported;
