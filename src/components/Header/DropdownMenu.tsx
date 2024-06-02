import * as React from "react";

import DropdownItem from "./DropdownItem";

/**
 * DropdownMenu is a part of the <Dropdown /> component.
 *
 * <DropdownMenu /> contains a list of items that are displayed in the dropdown
 * menu when the user clicks on the open button in the mobile view.
 *
 * Each list item is a <DropdownItem /> component that contains a Gatsby Link
 * component to navigate to the specified URL.
 *
 */
const DropdownMenu: React.FC = () => {
  return (
    <ul>
      <DropdownItem url="/posts">Posts</DropdownItem>
      <DropdownItem url="/tags">Tags</DropdownItem>
      <DropdownItem url="/about">About</DropdownItem>
    </ul>
  );
};

export default DropdownMenu;
