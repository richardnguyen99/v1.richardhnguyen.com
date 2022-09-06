/**
 * A React component to display a collapsible component that can hide content
 * when needed.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import { StyledSummaryHeader, StyledSummaryWrapper } from "./style";
import { SummaryProps } from "./type";

const Summary: React.FC<SummaryProps> = ({ summary, children, ...rest }) => {
  return (
    <StyledSummaryWrapper {...rest}>
      <StyledSummaryHeader>
        <em>{summary}</em>
      </StyledSummaryHeader>
      {children}
    </StyledSummaryWrapper>
  );
};

export default Summary;
