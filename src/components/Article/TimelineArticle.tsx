/**
 * React component to represent neat peeks for latest articles
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import {
  StyledTimelineArticle,
  StyledTimelineHeader,
  StyledTimelineStickyHeader,
  StyledTimelineHeaderTitle,
  StyledTimelineTime,
  StyledTimelineArticleContent,
} from "./style";
import SVG from "@components/Svg";
import Typography from "@components/Typography";
import { TimelineArticleProps } from "./type";

const TimelineArticle: React.FC<TimelineArticleProps> = ({
  title,
  time = "",
  tags = [],
  last = false,
  children,
  ...rest
}) => {
  return (
    <StyledTimelineArticle {...rest}>
      <StyledTimelineHeader>
        <StyledTimelineStickyHeader className={`${last && "sticky-header"}`}>
          <SVG.Commit />
          <StyledTimelineHeaderTitle>
            <Typography.GradientText>{title}</Typography.GradientText>
          </StyledTimelineHeaderTitle>
          {time ? <StyledTimelineTime>{time}</StyledTimelineTime> : null}
        </StyledTimelineStickyHeader>
      </StyledTimelineHeader>
      <StyledTimelineArticleContent>{children}</StyledTimelineArticleContent>
    </StyledTimelineArticle>
  );
};

export default TimelineArticle;
