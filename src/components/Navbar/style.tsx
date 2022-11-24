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
  border-width: 1px;
  border-style: solid;
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

export const StyledNavbarNav = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledNavbarBrand = styled(Link)`
  margin-right: 0.75rem;
  width: 2rem;
  flex: none;
  overflow: hidden;
  width: auto;

  svg {
    display: block;
    height: 1.5rem;
    width: auto;
    color: rgba(var(--rc-rgb-white), 1);

    &:hover {
      color: rgba(var(--rc-rgb-white), 0.7);
    }
  }
`;

export const StyledNavbarTabList = styled.ul`
  position: relative;
  display: none;
  align-items: center;

  line-height: 1.5rem;
  font-weight: 600;

  margin-left: auto;

  @media screen and (min-width: 640px) {
    display: flex;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 2rem;
  }
`;

export const StyledNavbarIconList = styled.ul`
  position: relative;
  display: none;
  align-items: center;

  margin-left: auto;

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

export const StyledNavbarListIcon = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;

  border-radius: 5px;

  margin-left: 16px;

  &:first-of-type {
    margin-left: 0;
  }

  &:hover {
    background-color: rgba(var(--rc-rgb-slate-300), 0.1);
  }
`;

export const StyledNavbarListIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  min-width: 2rem;
  padding: 0.25rem;

  color: rgba(var(--rc-rgb-slate-400), 1);

  &:hover {
    color: rgba(var(--rc-rgb-white), 1);
  }

  div,
  a,
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const StyledNavbarListIconText = styled.p`
  font-weight: 600;
  line-height: 1.5;

  margin: 8px;
  margin-right: 4px;
`;

export const StyledNavbarCollapse = styled(StyledNavbarListIcon)`
  display: block;

  margin-left: auto !important;

  @media screen and (min-width: 640px) {
    display: none;
  }
`;
