import * as React from "react";
import styled from "styled-components";

import { CFC } from "@config/react";

export interface ShadedQuestionProps {
  color: string;
}

const StyledShadedQuestion = styled.div<ShadedQuestionProps>`
  --bg: var(--rc-color-slate-600);
  --bg--hover: var(--rc-color-${(props) => props.color}-600);
  --question-bg: var(--rc-color-slate-500);
  --question-bg--hover: var(--rc-color-${(props) => props.color}-200);
  --dot-bg: var(--rc-color-slate-400);
  --dot-bg--hover: var(--rc-color-${(props) => props.color}-400);

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

  #question {
    fill: var(--question-bg);
  }

  &:hover #question,
  .parent:hover & #question {
    fill: var(--question-bg--hover);
  }

  .dot {
    fill: var(--dot-bg);
  }

  &:hover .dot,
  .parent:hover & .dot {
    fill: var(--dot-bg--hover);
  }
`;

const ShadedQuestion: CFC<HTMLDivElement, ShadedQuestionProps> = ({
  color,
  ...rest
}) => {
  return (
    <StyledShadedQuestion color={color || "violet"} {...rest}>
      <svg height="1.5rem" width="1.5rem" viewBox="0 0 24 24" fill="none">
        <path
          id="question"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 5a6 6 0 0 0-4.687 9.746c.215.27.315.62.231.954l-.514 2.058a1 1 0 0 0 1.485 1.1l2.848-1.71c.174-.104.374-.15.576-.148H13a6 6 0 0 0 0-12h-2Z"
        ></path>
        <circle cx="12" cy="11" r="1" className="dot"></circle>
        <circle cx="9" cy="11" r="1" className="dot"></circle>
        <circle cx="15" cy="11" r="1" className="dot"></circle>
      </svg>
    </StyledShadedQuestion>
  );
};

export default ShadedQuestion;
