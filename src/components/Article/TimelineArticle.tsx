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
  StyledTimelineTags,
  StyledTimelineTagWapper,
  StyledTimeLineTag,
} from "./style";
import { TimelineArticleProps } from "./type";
import SVG from "@components/Svg";
import Typography from "@components/Typography";
import SeeMore from "./SeeMore";

const TimelineArticle: React.FC<TimelineArticleProps> = ({
  title,
  time = "",
  tags = [],
  last = false,
  children,
  articleUrl = "#",
  ...rest
}) => {
  const renderTags = (_tags: readonly string[]) => {
    return (
      <StyledTimelineTags>
        {_tags.map((tag, idx) => (
          <StyledTimelineTagWapper key={idx}>
            <StyledTimeLineTag href="#">{tag}</StyledTimeLineTag>
          </StyledTimelineTagWapper>
        ))}
      </StyledTimelineTags>
    );
  };

  return (
    <StyledTimelineArticle {...rest}>
      <StyledTimelineHeader>
        <StyledTimelineStickyHeader className={`${last && "sticky-header"}`}>
          <SVG.Commit />
          <StyledTimelineHeaderTitle to={articleUrl}>
            <Typography.Gradient>{title}</Typography.Gradient>
          </StyledTimelineHeaderTitle>
          {time ? <StyledTimelineTime>{time}</StyledTimelineTime> : null}
          {tags && renderTags(tags)}
        </StyledTimelineStickyHeader>
      </StyledTimelineHeader>
      <StyledTimelineArticleContent>
        {children}
        <SeeMore to={articleUrl}>See More</SeeMore>
      </StyledTimelineArticleContent>
    </StyledTimelineArticle>
  );
};

export default TimelineArticle;
