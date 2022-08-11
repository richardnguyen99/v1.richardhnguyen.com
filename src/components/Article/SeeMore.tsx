import * as React from "react";

import { StyledArticleSeeMore } from "./style";
import { SeeMoreProps } from "./type";

const SeeMore: React.FC<SeeMoreProps> = ({ children, to, ...rest }) => {
  return (
    <StyledArticleSeeMore to={to} {...rest}>
      <span className="arrow left">
        <span />
      </span>
      <div className="main-text">
        <div className="text">{children}</div>
        <span className="arrow right">
          <span />
        </span>
      </div>
    </StyledArticleSeeMore>
  );
};

export default SeeMore;
