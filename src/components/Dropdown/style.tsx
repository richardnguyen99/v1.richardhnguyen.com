import styled from "styled-components";

export const StyledDropdown = styled.div`
  position: absolute;
  display: flex;
  border-radius: 0.5rem;
  padding: 1rem;
  opacity: 1;
  z-index: 1050;
  background-color: rgba(var(--rc-rgb-slate-800), 1);
  box-shadow: 0px 1px 3px rgba(var(--rc-rgb-black), 0.24),
    0px 10px 28px -4px rgba(var(--rc-rgb-black), 0.48);
  height: auto;
`;

export const StyledDropdownInner = styled.div`
  position: relative;
  display: flex;
  width: 85vw;
  flex-direction: column;
  font-size: 14px;

  @media screen and (min-width: 680px) {
    width: 264px;
    width: var(--dropdown-width);
  }
`;
