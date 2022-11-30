/**
 * A React component that displays a solid foundation component for dialogs,
 * popovers, forms, etc.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

import { CFC, CMouseEv } from "@config/react";

import {
  StyledDropdown,
  StyledDropdownOverlay,
  StyledDropdownInner,
} from "./style";
import type { ModalProps } from "./type";
import Panel from "./Panel";

const Modal: CFC<HTMLDivElement, ModalProps> = ({
  children,
  width,
  title,
  overlay,
  onCloseCallback,
  onClickCallback,
  ...rest
}) => {
  const onDropdownClick = React.useCallback((e: CMouseEv<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  const getDropdownVars = () =>
    ({
      "--dropdown-width": width,
    } as React.CSSProperties);

  return (
    <StyledDropdownOverlay
      {...rest}
      className={!overlay && "no-overlay"}
      onClick={onClickCallback}
    >
      <StyledDropdown
        className="dropdown"
        style={getDropdownVars()}
        onClick={onDropdownClick}
      >
        <StyledDropdownInner>
          <Panel title={title} onCloseCallback={onCloseCallback} />
          <ul>{children}</ul>
        </StyledDropdownInner>
      </StyledDropdown>
    </StyledDropdownOverlay>
  );
};

export default Modal;
