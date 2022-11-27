import {
  StyledNavbar,
  StyledNavbarContainer,
  StyledNavbarWrapper,
} from "@components/Navbar/style";
import styled from "styled-components";

export const StyledDropdownOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  backdrop-filter: blur(6px);

  &.no-overlay {
    display: none;
  }
`;

export const StyledDropdown = styled.div`
  position: relative;
  display: flex;
  border-radius: 0.5rem;
  padding: 1rem;
  opacity: 1;
  z-index: 1050;
  background-color: rgba(var(--rc-rgb-slate-800), 1);
  box-shadow: 0px 1px 3px rgba(var(--rc-rgb-black), 0.24),
    0px 10px 28px -4px rgba(var(--rc-rgb-black), 0.48);
  height: auto;
  top: 5rem;
  left: 0.5rem;
  width: calc(100vw - 1rem);

  @media screen and (min-width: 680px) {
    width: 264px;
    width: var(--dropdown-width);
  }
`;

export const StyledDropdownInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 100%;
`;

export const StyledDropdownPanel = styled(StyledNavbar)`
  border: none;
  margin-bottom: 1rem;
`;

export const StyledDropdownPanelContainer = styled(StyledNavbarContainer)`
  max-width: 64rem;
`;

export const StyledDropdownPanelInner = styled(StyledNavbarWrapper)`
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(var(--rc-rgb-slate-700), 0.35);

  h1 {
    margin: 0;
    padding: 0;
    color: var(--rc-color-white);
  }

  button {
    margin-left: auto;
  }
`;
