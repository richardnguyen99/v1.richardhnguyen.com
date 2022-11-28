import * as React from "react";

import { CFC, CMouseEv } from "@config/react";

import {
  StyledDropdown,
  StyledDropdownOverlay,
  StyledDropdownInner,
} from "./style";
import type { ModalProps } from "./type";
import Panel from "./Panel";
import { Icon } from "@components";

const Modal: CFC<HTMLDivElement, ModalProps> = ({
  children,
  width,
  title,
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
    <StyledDropdownOverlay {...rest} onClick={onClickCallback}>
      <StyledDropdown
        className="dropdown"
        style={getDropdownVars()}
        onClick={onDropdownClick}
      >
        <StyledDropdownInner>
          <Panel title={title} onCloseCallback={onCloseCallback} />
          <ul>
            <li
              style={{ display: "flex", alignItems: "center" }}
              className="parent"
            >
              <Icon.ShadedBook color="sky" />
              <h3>Blog</h3>
            </li>
            <li
              style={{ display: "flex", alignItems: "center" }}
              className="parent"
            >
              <Icon.ShadedQuestion color="violet" />
              <h3>About</h3>
            </li>
          </ul>
        </StyledDropdownInner>
      </StyledDropdown>
    </StyledDropdownOverlay>
  );
};

export default Modal;
