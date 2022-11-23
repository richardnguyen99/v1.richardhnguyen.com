/**
 * A React Component that displays some content on mouse enter.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";
import styled from "styled-components";

import { CFC } from "@config/react";

const MARGIN = 8;

// Props type begins ========================================================= /

export type PopupPlacement =
  | "bottom"
  | "bottom-left"
  | "bottom-right"
  | "top"
  | "top-left"
  | "top-right"
  | "right"
  | "right-top"
  | "right-bottom"
  | "left"
  | "left-top"
  | "left-bottom";
export interface PopupProps {
  children: React.ReactNode;
  triggerNode: HTMLElement;
  placement?: PopupPlacement;
}
// Props type ends =========================================================== /

// Style begins ============================================================== /
const StyledPopup = styled.div`
  font-feature-settings: "tnum";
  box-sizing: border-box;
  color: rgba(var(--rc-color-gray-900));
  display: block;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  margin: 0;
  max-width: 250px;
  padding: 0;
  position: absolute;
  visibility: visible;
  z-index: 1070;
`;

const StyledPopupInner = styled.div`
  overflow-wrap: break-word;
  opacity: 1;
  min-height: 0;
  line-height: 1;
  height: auto;
  font-size: 0.75rem;
  background: rgb(var(--rc-rgb-slate-700));
  border-radius: 5px;
  min-width: 32px;
  text-align: center;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
`;
// Style ends ================================================================ /

// Component definition begins =============================================== /
const Popup: CFC<HTMLDivElement, PopupProps> = ({
  children,
  triggerNode,
  placement = "bottom",
}) => {
  const innerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (innerRef && innerRef.current && triggerNode) {
      const triggerRect = triggerNode.getBoundingClientRect();
      const popupRect = innerRef.current.getBoundingClientRect();
      const triggerStyle = getComputedStyle(triggerNode);

      innerRef.current.style.position = "absolute";
      innerRef.current.style.transformOrigin = "";
      innerRef.current.style.pointerEvents = "none";

      if (placement === "bottom") {
        innerRef.current.style.top =
          triggerRect.top + triggerRect.height + MARGIN + "px";
        innerRef.current.style.left =
          triggerRect.left +
          ((triggerRect.width - popupRect.right) >> 1) +
          "px";
      } else if (placement === "bottom-left") {
        innerRef.current.style.top =
          triggerRect.top + triggerRect.height + MARGIN + "px";
        innerRef.current.style.left = triggerRect.left + "px";
      } else if (placement === "bottom-right") {
        innerRef.current.style.top =
          triggerRect.top + triggerRect.height + MARGIN + "px";
        innerRef.current.style.left =
          triggerRect.right -
          popupRect.width -
          parseInt(triggerStyle.marginLeft) +
          "px";
      }
    }
  }, [placement, triggerNode]);

  return (
    <StyledPopup ref={innerRef}>
      <StyledPopupInner>{children}</StyledPopupInner>
    </StyledPopup>
  );
};
// Component definition ends ================================================= /

export default Popup;
