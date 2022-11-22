/**
 * Tooltip
 */

import { CFC } from "@config/react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Popup from "./Popup";

export type TooltipProps = {
  children: React.ReactNode;

  // TODO: Update text to popup to more generic
  text?: string;
};

const Tooltip: CFC<HTMLElement, TooltipProps> = ({ children, text = "" }) => {
  const triggerRef = React.useRef<HTMLElement>(null);
  const [visible, setVisible] = React.useState(false);

  const onMouseEnter = React.useCallback(() => {
    setVisible(true);
  }, []);

  const onMouseLeave = React.useCallback(() => {
    setVisible(false);
  }, []);

  const Prompt = <Popup triggerNode={triggerRef.current}>{text}</Popup>;

  const portal = visible
    ? ReactDOM.createPortal(Prompt, document.querySelector("#tooltip"))
    : null;

  /* eslint-disable indent */
  const cloneChild = React.isValidElement(children)
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      React.cloneElement(children as React.ReactElement<any>, {
        onMouseEnterCallback: onMouseEnter,
        onMouseLeaveCallback: onMouseLeave,
        ref: triggerRef,
      })
    : children;
  /* eslint-enable indent */

  React.useEffect(() => {
    if (triggerRef && triggerRef.current) {
      // TODO: Remove console.log
      console.log(triggerRef.current);
    }
  }, []);

  return (
    <>
      {cloneChild}
      {portal}
    </>
  );
};

export default Tooltip;
