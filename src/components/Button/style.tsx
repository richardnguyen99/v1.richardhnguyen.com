/**
 * Style definitions for Button components.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import styled from "styled-components";
import { Link } from "gatsby";

export const StyledButtonAnchor = styled.a`
  display: flex;
  align-items: center;
  flex: none;
`;

export const StyledButtonLink = styled(Link)`
  display: flex;
  flex: none;
  align-items: center;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 8px;

  &.transparent {
    background: transparent;
  }

  &:hover {
    background-color: rgba(var(--rc-rgb-slate-300), 0.1);
  }
`;

export const StyledButtonInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

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
