import * as React from "react";

import { CFC } from "@config/react";
import { Dropdown, Tooltip, Button, Icon } from "@components";
import { DropdownItemProps } from "@components/Dropdown/type";

const NavbarDropdown: CFC<HTMLElement> = () => {
  const getDropdownContent: DropdownItemProps[] = [
    {
      title: "Blog",
      // Add lang
      to: "/blog",
      color: "sky",
      icon: "ShadedBook",
      colorTextOn: "hover",
    },
    {
      title: "About",
      to: "/about",
      color: "violet",
      icon: "ShadedQuestion",
      colorTextOn: "hover",
    },

    {
      title: "Project",
      to: "/project",
      color: "lime",
      icon: "ShadedQuestion",
      colorTextOn: "hover",
    },
  ];

  return (
    <Dropdown title="Menu" content={getDropdownContent} action="click" overlay>
      <Tooltip content="Menu" placement="bottom-right">
        <Button transparent>
          <Icon.ThreeBars />
        </Button>
      </Tooltip>
    </Dropdown>
  );
};

export default NavbarDropdown;
