/**
 * Index file for <Article /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import {
  StyledArticleContainer,
  StyledTimelineArticle,
  StyledTimelineArticleContent,
  StyledTimelineHeader,
  StyledTimelineHeaderTitle,
  StyledTimelineStickyHeader,
  StyledTimelineTime,
} from "./style";

const exported = Object.assign("Article", {
  Container: StyledArticleContainer,
  Timeline: StyledTimelineArticle,
  TimelineHeader: StyledTimelineHeader,
  TimelineStickyHeader: StyledTimelineStickyHeader,
  TimelineArticleContent: StyledTimelineArticleContent,
  TimelineHeaderTitle: StyledTimelineHeaderTitle,
  TimelineTime: StyledTimelineTime,
});

export default exported;
