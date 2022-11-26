import * as React from "react";

import { CFC, CMouseEv, CMouseEvCallback } from "@config/react";

import {
  StyledDropdown,
  StyledDropdownOverlay,
  StyledDropdownInner,
} from "./style";

const Modal: CFC<
  HTMLDivElement,
  { width: string; onClickCallback: CMouseEvCallback<HTMLDivElement> }
> = ({ children, width, onClickCallback, ...rest }) => {
  const getDropdownVars = () =>
    ({
      "--dropdown-width": width,
    } as React.CSSProperties);

  return (
    <StyledDropdownOverlay {...rest} onClick={onClickCallback}>
      <StyledDropdown
        className="dropdown"
        style={getDropdownVars()}
        onClick={(e: CMouseEv<HTMLDivElement>) => e.stopPropagation()}
      >
        <StyledDropdownInner>{children}</StyledDropdownInner>
      </StyledDropdown>
    </StyledDropdownOverlay>
  );
};

export default Modal;
