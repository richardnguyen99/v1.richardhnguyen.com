/**
 * A React Component that allows actions, events and choices by clicking.
 *
 * @author Richard Nguyen <richard@richardhguyen.com>
 */

import * as React from "react";

import type { ButtonProps, ButtonRef } from "./type";
import {
  StyledButton,
  StyledButtonInner,
  StyledButtonAnchor,
  StyledButtonLink,
} from "./style";

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
      children,
      onMouseEnterCallback,
      onMouseLeaveCallback,
      onClickCallback,
      ...rest
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLButtonElement>(null);

    // If some components such as Tooltip need to know the DOM node of Button.
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

      return "active";
    };

    const getClassName = () => {
      return [getBtnType()].join(" ");
    };
    const styles = {
      "--btn-opacity": disabled || isLoading ? 0.7 : 1,
    } as React.CSSProperties; // add this so Typescript won't complain.

    const btn = (
      <StyledButton
        {...rest}
        ref={inputRef}
        onClick={onClick}
        style={styles}
        className={getClassName()}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <StyledButtonInner>{children}</StyledButtonInner>
      </StyledButton>
    );

    // Anchor tag and Gatsby Link should wrap around the original button so that
    // link will work.

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

export default Object.assign(Button, {});
