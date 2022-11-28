import * as React from "react";
import styled from "styled-components";

import { CFC } from "@config/react";

export interface ShadedBookProps {
  color: string;
}

const StyledShadedBook = styled.div<ShadedBookProps>`
  --bg: var(--rc-color-slate-600);
  --bg--hover: var(--rc-color-${(props) => props.color}-600);
  --leftPage-bg: var(--rc-color-slate-300);
  --leftPage-bg--hover: var(--rc-color-${(props) => props.color}-200);
  --rightPage-bg: var(--rc-color-slate-400);
  --rightPage-bg--hover: var(--rc-color-${(props) => props.color}-400);

  border-radius: 0.375rem;
  padding: 0.25rem;

  background: var(--bg);

  &:hover,
  .parent:hover & {
    background: var(--bg--hover);
  }

  svg {
    display: block;
    height: 1.5rem;
    width: 1.5rem;
  }

  #leftPage {
    fill: var(--leftPage-bg);
  }

  &:hover #leftPage,
  .parent:hover & #leftPage {
    fill: var(--leftPage-bg--hover);
  }

  #rightPage {
    fill: var(--rightPage-bg);
  }

  &:hover #rightPage,
  .parent:hover & #rightPage {
    fill: var(--rightPage-bg--hover);
  }
`;

const ShadedBook: CFC<HTMLDivElement, ShadedBookProps> = ({
  color,
  ...rest
}) => {
  return (
    <StyledShadedBook color={color || "sky"} {...rest}>
      <svg height="1.5rem" width="1.5rem" viewBox="0 0 24 24" fill="none">
        <path
          id="leftPage"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z"
        ></path>
        <path
          id="rightPage"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z"
        ></path>
      </svg>
    </StyledShadedBook>
  );
};

export default ShadedBook;
