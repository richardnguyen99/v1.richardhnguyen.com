/**
 * A React component to display the main footer and all the footer information
 * and details.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import { FooterProps } from "./type";
import { StyledFooter } from "./style";

const Footer: React.FC<FooterProps> = ({ children, ...rest }) => {
  return <StyledFooter {...rest}>{children}</StyledFooter>;
};

export default Footer;
