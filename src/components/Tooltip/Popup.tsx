import * as React from "react";
import styled from "styled-components";

import { CFC } from "@config/react";

const MARGIN = 8;

export interface PopupProps {
  children: React.ReactNode;
  triggerNode: HTMLElement;
}

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
  text-align: left;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
`;

const Popup: CFC<HTMLDivElement, PopupProps> = ({ children, triggerNode }) => {
  const innerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (innerRef && innerRef.current && triggerNode) {
      const triggerRect = triggerNode.getBoundingClientRect();
      const popupRect = innerRef.current.getBoundingClientRect();

      innerRef.current.style.position = "absolute";
      innerRef.current.style.transformOrigin = "50% 28px 0px";
      innerRef.current.style.pointerEvents = "none";

      // bottom
      innerRef.current.style.top =
        triggerRect.top + triggerRect.height + MARGIN + "px";
      innerRef.current.style.left =
        triggerRect.left - (popupRect.width - triggerRect.width) / 2 + "px";
    }
  }, [triggerNode]);

  return (
    <StyledPopup ref={innerRef}>
      <StyledPopupInner>{children}</StyledPopupInner>
    </StyledPopup>
  );
};

export default Popup;
