/**
 * Index file for <Terminal />
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import {
  StyledTerminal,
  StyledTerminalBtn,
  StyledTerminalBtnGroup,
  StyledTerminalContent,
  StyledTerminalTitle,
} from "./style";
import Terminal from "./Terminal";

const exported = Object.assign(Terminal, {
  Base: StyledTerminal,
  BtnGroup: StyledTerminalBtnGroup,
  Btn: StyledTerminalBtn,
  Title: StyledTerminalTitle,
  Content: StyledTerminalContent,
});

export default exported;
