/**
 * A React component to display a Terminal-base to display code.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import {
  StyledTerminal,
  StyledTerminalBtnGroup,
  StyledTerminalBtn,
  StyledTerminalToolbar,
  StyledTerminalTitle,
  StyledTerminalContent,
} from "./style";
import { TerminalProps } from "./type";

const Terminal: React.FC<TerminalProps> = ({
  title = "",
  children,
  ...rest
}) => {
  return (
    <StyledTerminal {...rest}>
      <StyledTerminalToolbar>
        <StyledTerminalBtnGroup>
          <StyledTerminalBtn className="close" />
          <StyledTerminalBtn className="min" />
          <StyledTerminalBtn className="max" />
        </StyledTerminalBtnGroup>
        <StyledTerminalTitle>{title}</StyledTerminalTitle>
        <span className="empty"></span>
      </StyledTerminalToolbar>
      <StyledTerminalContent>{children}</StyledTerminalContent>
    </StyledTerminal>
  );
};

export default Terminal;
