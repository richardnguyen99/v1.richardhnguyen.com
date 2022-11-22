import * as React from "react";

import { CFC } from "@config/react";

export interface PopupProps {
  children: React.ReactNode;
  triggerNode: HTMLElement;
}

const Popup: CFC<HTMLDivElement, PopupProps> = ({ children, triggerNode }) => {
  const innerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (innerRef && innerRef.current && triggerNode) {
      const triggerRect = triggerNode.getBoundingClientRect();

      innerRef.current.style.position = "absolute";
      innerRef.current.style.top = triggerRect.top + "px";
      innerRef.current.style.left = triggerRect.left + "px";
    }
  }, [triggerNode]);

  return <div ref={innerRef}>{children}</div>;
};

export default Popup;
