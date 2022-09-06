/**
 * Index file for grouping <Content /> components
 *
 * <Content /> components are mainly used to display Markdown content.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import Content from "./Content";
import ContentTitle from "./Header";
import FrontMatter from "./FrontMatter";
import Thumbnail from "./Thumbnail";
import {
  StyledContentGrid,
  StyledDescription,
  StyledLabel,
  StyledLabels,
  StyledStickySideContent,
} from "./style";
import Chapter from "./Chapter";
import TOC from "./TOC";
import Dots from "./Dots";
import Pagination from "./Pagination";

const exported = Object.assign(Content, {
  Header: ContentTitle,
  FrontMatter,
  Thumbnail,
  Description: StyledDescription,
  Grid: StyledContentGrid,
  Side: StyledStickySideContent,
  Chapter: Chapter,
  LabelContainer: StyledLabels,
  Label: StyledLabel,
  TOC,
  Dots,
  Pagination,
});

export default exported;
