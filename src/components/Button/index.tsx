/**
 * A React Component to serve as
 */

import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

// prop types begins ========================================================= /
export interface ButtonProps {
  href?: string;
  to?: string;
  target?: string;
  disabled?: boolean;
  isLoading?: boolean;
  iconPlacement?: "left" | "right";
  icon?: React.ReactNode;
  transparent?: boolean;
  flat?: boolean;
  border?: boolean;
  onMouseEnterCallback?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeaveCallback?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickCallback?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode | React.ReactNode[];
}

export type ButtonRef = HTMLButtonElement;
// prop types ends =========================================================== /

export const StyledButtonAnchor = styled.a`
  display: flex;
  align-items: center;
  flex: none;
`;

export const StyledButtonLink = styled(Link)`
  display: flex;
  flex: none;
  align-items: center;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 8px;

  &.transparent {
    background: transparent;
  }

  &:hover {
    background-color: rgba(var(--rc-rgb-slate-300), 0.1);
  }
`;

export const StyledButtonInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  min-width: 2rem;
  padding: 0.25rem;

  color: rgba(var(--rc-rgb-slate-400), 1);

  &:hover {
    color: rgba(var(--rc-rgb-white), 1);
  }

  div,
  a,
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

// Component definition begins =============================================== /
const Button = React.forwardRef<ButtonRef, ButtonProps>(
  (
    {
      href,
      to,
      target,
      disabled,
      isLoading,
      transparent,
      flat,
      border,
      icon,
      iconPlacement = "left",
      children,
      onMouseEnterCallback,
      onMouseLeaveCallback,
      onClickCallback,
      ...rest
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLButtonElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current, [inputRef]);

    const onMouseEnter = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onMouseEnterCallback) onMouseEnterCallback(e);
      },
      [onMouseEnterCallback]
    );

    const onMouseLeave = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onMouseLeaveCallback) onMouseLeaveCallback(e);
      },
      [onMouseLeaveCallback]
    );

    const onClick = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClickCallback) onClickCallback(e);
      },
      [onClickCallback]
    );

    const getBtnType = (): string => {
      if (transparent) return "transparent";
      if (flat) return "flat";

      return "full";
    };

    const getClassName = () => {
      return [getBtnType()].join(" ");
    };

    const btn = (
      <StyledButton
        {...rest}
        ref={inputRef}
        onClick={onClick}
        style={
          {
            "--btn-opacity": disabled || isLoading ? 0.7 : 1,
          } as React.CSSProperties
        }
        className={getClassName()}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <StyledButtonInner>{children}</StyledButtonInner>
      </StyledButton>
    );

    if (href)
      return (
        <StyledButtonAnchor
          href={href}
          target={target || "_blank"}
          rel={!target ? "noopener noreferrer" : undefined}
        >
          {btn}
        </StyledButtonAnchor>
      );
    else if (to) return <StyledButtonLink to={to}>{btn}</StyledButtonLink>;

    return btn;
  }
);

Button.displayName = "Button";
// Component definition ends ================================================= /

export default Object.assign(Button, {});
