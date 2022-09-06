/**
 *  React component for Octicon arrow right 16
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import { StyledSvg } from "./style";

const ArrowRight: React.FC = () => {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="16"
      height="16"
    >
      <path
        fillRule="evenodd"
        d="M7.78 12.53a.75.75 0 01-1.06 0L2.47 8.28a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L4.81 7h7.44a.75.75 0 010 1.5H4.81l2.97 2.97a.75.75 0 010 1.06z"
      ></path>
    </StyledSvg>
  );
};

export default ArrowRight;
