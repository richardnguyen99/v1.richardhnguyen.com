/**
 * A React component to display the title queried from frontmatter.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import {
  StyledHeader,
  StyledSectionHeader,
  StyledSectionHeaderContainer,
} from "./style";
import { ContentTitleProps } from "./type";
import Typography from "@components/Typography";

const ContentTitle: React.FC<ContentTitleProps> = ({
  title,
  children,
  ...rest
}) => {
  return (
    <StyledSectionHeader {...rest}>
      <StyledSectionHeaderContainer>
        <StyledHeader>
          <Typography.Gradient color="green">{title}</Typography.Gradient>
        </StyledHeader>
        <div>{children}</div>
      </StyledSectionHeaderContainer>
    </StyledSectionHeader>
  );
};

export default ContentTitle;
