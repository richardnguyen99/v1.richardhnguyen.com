import * as React from "react";

import { CFC } from "@config/react";

import { StyledA, StyledDropdownItem, StyledL } from "./style";
import { DropdownItemProps } from "./type";
import { Icon } from "@components";

const Item: CFC<HTMLLIElement, DropdownItemProps> = ({
  href,
  to,
  target,
  color,
  title,
  icon,
  colorTextOn,
  ...rest
}) => {
  const getItemVars = () =>
    ({
      "--dropdownItem-color":
        color !== "black" && color !== "white"
          ? `var(--rc-color-${color}-600)`
          : `var(--rc-color-${color})`,
    } as React.CSSProperties);

  const ItemIcon = () => {
    if (typeof icon === "undefined") return null;

    const Icn = Icon[icon];

    return <Icn color={color} />;
  };

  const I = () => (
    <StyledDropdownItem
      className={`parent ${colorTextOn}`}
      style={getItemVars()}
      {...rest}
    >
      <ItemIcon />
      <h3>{title}</h3>
    </StyledDropdownItem>
  );

  if (href) {
    return (
      <StyledA
        href={href}
        target={target || "_blank"}
        rel={!target ? "noopener noreferrer" : undefined}
      >
        <I />
      </StyledA>
    );
  } else if (to) {
    return (
      <StyledL to={to}>
        <I />
      </StyledL>
    );
  }

  return <I />;
};

export default Item;
