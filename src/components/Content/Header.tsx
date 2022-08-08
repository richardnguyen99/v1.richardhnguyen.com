/**
 * A React component to display the title queried from frontmatter.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import { StyledHeader, StyledSectionHeader } from "./style";
import { ContentTitleProps } from "./type";
import Utility from "@components/Utility";
import Typography from "@components/Typography";

const ContentTitle: React.FC<ContentTitleProps> = ({
  title,
  children,
  ...rest
}) => {
  return (
    <StyledSectionHeader>
      <Utility.Container>
        <StyledHeader {...rest}>
          <Typography.Gradient color="green">{title}</Typography.Gradient>
        </StyledHeader>
        <div>{children}</div>
      </Utility.Container>
    </StyledSectionHeader>
  );
};

export default ContentTitle;
