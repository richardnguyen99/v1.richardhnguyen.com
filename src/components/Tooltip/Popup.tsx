/**
 * A React Component that displays some content on mouse enter.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

import { CFC } from "@config/react";

import { StyledPopup, StyledPopupInner } from "./style";
import type { PopupProps } from "./type";

const MARGIN = 8;

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
      const popupStyle = getComputedStyle(innerRef.current);

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
          triggerRect.left -
          (parseInt(popupStyle.width) - parseInt(triggerStyle.width)) +
          "px";
      } else if (placement === "top") {
        innerRef.current.style.top =
          triggerRect.top - triggerRect.height + MARGIN + "px";
        innerRef.current.style.left =
          triggerRect.left +
          ((triggerRect.width - popupRect.right) >> 1) +
          "px";
      } else if (placement === "top-left") {
        innerRef.current.style.top =
          triggerRect.top - triggerRect.height + MARGIN + "px";
        innerRef.current.style.left = triggerRect.left + "px";
      } else if (placement === "top-right") {
        innerRef.current.style.top =
          triggerRect.top - triggerRect.height + MARGIN + "px";
        innerRef.current.style.left =
          triggerRect.right -
          popupRect.width -
          parseInt(triggerStyle.marginLeft) +
          "px";
      } else if (placement === "right") {
        innerRef.current.style.left =
          triggerRect.left + triggerRect.width + MARGIN + "px";
        innerRef.current.style.top =
          triggerRect.top +
          ((triggerRect.height - popupRect.bottom) >> 1) +
          "px";
      } else if (placement === "right-top") {
        innerRef.current.style.left =
          triggerRect.left + triggerRect.width + MARGIN + "px";
        innerRef.current.style.top = triggerRect.top + "px";
      } else if (placement === "right-bottom") {
        innerRef.current.style.left =
          triggerRect.left + triggerRect.width + MARGIN + "px";
        innerRef.current.style.top =
          triggerRect.bottom - parseInt(popupStyle.height) + "px";
      } else if (placement === "left") {
        innerRef.current.style.left =
          triggerRect.left - parseInt(popupStyle.width) - MARGIN + "px";
        innerRef.current.style.top =
          triggerRect.top +
          ((triggerRect.height - popupRect.bottom) >> 1) +
          "px";
      } else if (placement === "left-top") {
        innerRef.current.style.left =
          triggerRect.left - parseInt(popupStyle.width) - MARGIN + "px";
        innerRef.current.style.top = triggerRect.top + "px";
      } else if (placement === "left-bottom") {
        innerRef.current.style.left =
          triggerRect.left - parseInt(popupStyle.width) - MARGIN + "px";
        innerRef.current.style.top =
          triggerRect.bottom - parseInt(popupStyle.height) + "px";
      }
    }
  }, [placement, triggerNode]);

  return (
    <StyledPopup ref={innerRef}>
      <StyledPopupInner>{children}</StyledPopupInner>
    </StyledPopup>
  );
};

export default Popup;
