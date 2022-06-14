/**
 * React component for <Select />
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { StyledSelect } from "./style";

import { SelectProps } from "./type";

const Select: React.FC<SelectProps> = ({ children, ...rest }) => {
  return <StyledSelect {...rest}>{children}</StyledSelect>;
};

export default Select;
