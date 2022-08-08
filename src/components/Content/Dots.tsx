/**
 * A React component to display three dots for breaking the frontmatter panel and the content in MDX.
 *
 * Mainly, if there is no featured image, <Content.Dots /> should be used by default.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import { StyledDots } from "./style";

const Dots: React.FC = () => {
  return <StyledDots>•••</StyledDots>;
};

export default Dots;
