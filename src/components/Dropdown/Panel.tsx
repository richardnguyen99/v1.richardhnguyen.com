/**
 * A React component that displays a small heading panel for Modal components.
 * A Panel may contain a heading and/or a closing button if one of them is
 * specified by the Modal component.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

import { CFC } from "@config/react";
import { Icon, Button, Tooltip } from "@components";

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
              <Tooltip
                placement="bottom-right"
                content={`Close ${title}`}
                onClickCallback={onCloseCallback}
              >
                <Button transparent>
                  <Icon.XFillCircle />
                </Button>
              </Tooltip>
            </StyledDropdownPanelInner>
          </StyledDropdownPanelContainer>
        </StyledDropdownPanel>
      )}
    </>
  );
};

export default Panel;
