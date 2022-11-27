import * as React from "react";

import { CFC } from "@config/react";
import { Icon, Button } from "@components";

import {
  StyledDropdownPanel,
  StyledDropdownPanelContainer,
  StyledDropdownPanelInner,
} from "./style";
import type { PanelProps } from "./type";

const Panel: CFC<HTMLDivElement, PanelProps> = ({
  title,
  onCloseCallback,
  ...rest
}) => {
  return (
    <>
      {(title || onCloseCallback) && (
        <StyledDropdownPanel {...rest}>
          <StyledDropdownPanelContainer>
            <StyledDropdownPanelInner>
              <h1>{title || "Modal"}</h1>
              <Button transparent onClickCallback={onCloseCallback}>
                <Icon.XFillCircle />
              </Button>
            </StyledDropdownPanelInner>
          </StyledDropdownPanelContainer>
        </StyledDropdownPanel>
      )}
    </>
  );
};

export default Panel;
