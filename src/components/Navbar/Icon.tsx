/**
 * Navbar.Icon
 */

import { CFC } from "@config/react";
import * as React from "react";

import {
  StyledNavbarListIcon as IconWrapper,
  StyledNavbarListIconContainer as IconContainer,
} from "./style";

export interface IconProps {
  onMouseEnterCallback?: (e: React.MouseEvent<HTMLLIElement>) => void;
  onMouseLeaveCallback?: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const Icon: CFC<HTMLLIElement, IconProps> = ({
  children,
  onMouseEnterCallback,
  onMouseLeaveCallback,
}) => {
  const onMouseEnter = React.useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      onMouseEnterCallback(e);
    },
    [onMouseEnterCallback]
  );

  const onMouseLeave = React.useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      onMouseLeaveCallback(e);
    },
    [onMouseLeaveCallback]
  );

  return (
    <IconWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <IconContainer>{children}</IconContainer>
    </IconWrapper>
  );
};

export default Icon;
