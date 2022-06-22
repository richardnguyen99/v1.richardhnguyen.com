/**
 * Index file for <Content /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import Content from "./Content";
import ContentTitle from "./Header";
import FrontMatter from "./FrontMatter";
import Thumbnail from "./Thumbnail";
import { StyledDescription } from "./style";

const exported = Object.assign(Content, {
  Header: ContentTitle,
  FrontMatter,
  Thumbnail,
  Description: StyledDescription,
});

export default exported;
