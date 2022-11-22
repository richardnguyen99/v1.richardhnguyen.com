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
  children: React.ReactNode;
}

export type IconRef = { focus: () => void } & HTMLLIElement;

const Icon = React.forwardRef<IconRef, IconProps>(
  ({ children, onMouseEnterCallback, onMouseLeaveCallback }, ref) => {
    const inputRef = React.useRef<HTMLLIElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current, [inputRef]);

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
      <IconWrapper
        ref={inputRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <IconContainer>{children}</IconContainer>
      </IconWrapper>
    );
  }
);

Icon.displayName = "NavbarIcon";

export default Icon;
