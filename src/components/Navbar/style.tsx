/**
 * Styling for <Navbar /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { Link } from "gatsby";
import styled from "styled-components";

import { StyledContainer } from "@components/Utility/Container";

export const StyledNavbarWrapper = styled.nav`
  @media screen and (min-width: 750px) {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }

  background: rgb(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
`;

export const StyledNavbar = styled(StyledContainer)`
  display: flex;
  align-items: center;
`;

export const StyledNavbarBrand = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;
  opacity: 0.88;
  cursor: pointer;
  height: 64px;
  margin-right: 1rem;

  letter-spacing: 1;
  font-size: 1.5rem;
  letter-spacing: -0.026em;
  font-weight: 600;

  transition: height 200ms ease-in;

  .scrolled > & {
    height: 52px;
  }

  &:hover {
    color: var(--systemColor-blue);
  }

  &:hover:after {
    width: 100%;
  }

  &:after {
    content: "";
    content: "";
    position: absolute;
    height: 5px;
    width: 0%;
    background: var(--systemColor-blue);
    top: calc(100% - 5px);
    left: 0;
    right: 0;
    bottom: 0;
    transition: width 200ms cubic-bezier(0.2, 1.03, 0.81, 0.99);
  }
`;

export const StyledNavbarItemGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledNavbarNav = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;

  & > ${StyledNavbarItemGroup}:last-child {
    margin-left: auto;
  }
`;

export const StyledNavbarItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  opacity: 0.9;

  & > a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background: var(--systemColor-gray-6);
  }
`;
