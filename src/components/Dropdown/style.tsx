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
`;
