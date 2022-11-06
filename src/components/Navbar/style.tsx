/**
 * Styling for Navbar components
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import styled from "styled-components";

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
