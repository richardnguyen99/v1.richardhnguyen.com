/**
 * Styling for Navbar components
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import styled from "styled-components";
import { Link } from "gatsby";

export const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 40;
  width: 100%;
  flex: none;
  width: 100%;

  background-color: transparent;
  border-color: rgba(var(--rc-rgb-slate-50), 0.06);
`;

export const StyledNavbarContainer = styled.div`
  max-width: 90rem;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledNavbarWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;

  @media screen and (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const StyledNavbarFlex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledNavbarBrand = styled(Link)`
  margin-right: 0.75rem;
  width: 2rem;
  flex: none;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: auto;
  }
`;

export const StyledNavbarSvg = styled.svg`
  display: block;
  height: 1.5rem;
  width: auto;
  color: rgba(var(--rc-rgb-white), 1);

  &:hover {
    color: rgba(var(--rc-rgb-white), 0.7);
  }
`;

export const StyledNavbarList = styled.ul`
  position: relative;
  display: none;
  align-items: center;

  line-height: 1.5rem;
  font-weight: 600;

  margin-left: 2rem;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const StyledNavbarListItem = styled.li`
  margin-right: 0;
  margin-left: 32px;

  &:nth-of-type(1) {
    margin-left: 0;
  }
`;

export const StyledNavbarListLink = styled(Link)`
  &:hover {
    color: rgba(var(--rc-rgb-sky-400), 1);
  }
`;
