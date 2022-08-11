/**
 * Index file for <Article /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import { StyledArticleContainer, StyledArticleContent } from "./style";
import TimelineArticle from "./TimelineArticle";
import SeeMore from "./SeeMore";

const exported = Object.assign("Article", {
  Container: StyledArticleContainer,
  Timeline: TimelineArticle,
  Content: StyledArticleContent,
  SeeMore,
});

export default exported;
