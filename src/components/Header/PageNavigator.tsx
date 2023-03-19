import * as React from "react";

import Item from "./Item";

/**
 * Page Navigator is a part of the <Header /> component.
 *
 * The purpose of this component is to group and define the layout for header
 * items. The items are rendered by <Item />.
 *
 * @returns React.FC
 */
const PageNavigator: React.FC = () => {
  return (
    <div id="header-page-navigator" className="flex-grow-[2] flex ml-5">
      <Item id="header-page-posts-link" to="/posts" name="Posts" />
      <Item
        id="header-page-categories-link"
        to="/categories"
        name="Categories"
      />
      <Item id="header-page-about-link" to="/about" name="About" />
    </div>
  );
};

export default PageNavigator;
