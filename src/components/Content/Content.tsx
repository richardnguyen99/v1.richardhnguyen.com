/**
 * React component for displaying main content from MDX
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import { StyledContent } from "./style";
import { ContentProps } from "./type";

const Content: React.FC<ContentProps> = ({ children, ...rest }) => {
  return <StyledContent {...rest}>{children}</StyledContent>;
};

export default Content;
