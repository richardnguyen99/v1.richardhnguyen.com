/**
 * A React component to display tags in an articles
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import { StyledPill } from "./style";
import { PillProps } from "./type";

const Pill: React.FC<PillProps> = ({ children, ...rest }) => {
  return <StyledPill {...rest}>{children}</StyledPill>;
};

export default Pill;
