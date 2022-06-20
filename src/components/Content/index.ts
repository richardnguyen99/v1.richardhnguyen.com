/**
 * Index file for <Content /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import Content from "./Content";
import ContentTitle from "./Header";
import FrontMatter from "./FrontMatter";

const exported = Object.assign(Content, {
  Header: ContentTitle,
  FrontMatter,
});

export default exported;
