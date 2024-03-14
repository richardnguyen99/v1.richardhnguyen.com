import * as React from "react";

import DropdownItem from "./DropdownItem";

const DropdownMenu: React.FC = () => {
  return (
    <ul>
      <DropdownItem url="/posts" active={false}>
        Posts
      </DropdownItem>
      <DropdownItem url="/tags" active={false}>
        Tags
      </DropdownItem>
      <DropdownItem url="/about" active={false}>
        About
      </DropdownItem>
    </ul>
  );
};

export default DropdownMenu;
