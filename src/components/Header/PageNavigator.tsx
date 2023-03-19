import * as React from "react";
import { Link } from "gatsby";

import Brand from "@components/Animated/Brand";
import Item from "./Item";

/**
 * Page Navigator is a part of the <Header /> component.
 *
 * The purpose of this component is to group and define the layout for header
 * items. The items are rendered by `<Item />`.
 *
 * @returns React.FC
 */
const PageNavigator: React.FC = () => {
  return (
    <div
      id="header-page-navigator"
      className="flex-grow-[2] flex items-center ml-5"
    >
      <Link to="/">
        <Brand />
      </Link>
      <Item id="header-page-posts-link" to="/posts" name="Posts" />
      <Item
        id="header-page-categories-link"
        to="/categories"
        name="Categories"
      />
      <Item id="header-page-about-link" to="/about" name="About" />
      <Item id="header-page-projects-link" to="/projects" name="Projects" />
    </div>
  );
};

export default PageNavigator;
