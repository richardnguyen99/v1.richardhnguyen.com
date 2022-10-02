/**
 * A React component to display a full screen landing page section
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import { StyledLandingSection } from "./style";
import { LandingSectionProps } from "./type";

const LandingSection: React.FC<LandingSectionProps> = ({
  children,
  ...rest
}) => {
  return <StyledLandingSection {...rest}>{children}</StyledLandingSection>;
};

export default LandingSection;
