import * as React from "react";

import DropdownItem from "./DropdownItem";

const DropdownMenu: React.FC = () => {
  return (
    <ul>
      <DropdownItem url="/posts" active={false}>
        Posts
      </DropdownItem>
      <DropdownItem url="/about" active={false}>
        About
      </DropdownItem>
      <DropdownItem url="/projects" active={false}>
        Projects
      </DropdownItem>
    </ul>
  );
};

export default DropdownMenu;
