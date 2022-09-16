/**
 * A React component to display a full-width section.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import { StyledWrapper } from "./style";
import { WrapperProps } from "./type";

const Wrapper: React.FC<WrapperProps> = ({ children, ...rest }) => {
  return <StyledWrapper {...rest}>{children}</StyledWrapper>;
};

export default Wrapper;
