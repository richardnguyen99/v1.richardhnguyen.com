/**
 * Tooltip
 */

import { CFC } from "@config/react";
import * as React from "react";
import * as ReactDOM from "react-dom";

export type TooltipProps = {
  children: React.ReactNode;

  // TODO: Update text to popup to more generic
  text?: string;
};

const Tooltip: CFC<HTMLElement, TooltipProps> = ({ children, text = "" }) => {
  const childRef = React.useRef<HTMLElement>(null);
  const [visible, setVisible] = React.useState(false);

  const onMouseEnter = React.useCallback(() => {
    setVisible(true);
  }, []);

  const onMouseLeave = React.useCallback(() => {
    setVisible(false);
  }, []);

  const Prompt = <div>{text}</div>;

  const portal = visible
    ? ReactDOM.createPortal(Prompt, document.querySelector("#tooltip"))
    : null;

  /* eslint-disable indent */
  const cloneChild = React.isValidElement(children)
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      React.cloneElement(children as React.ReactElement<any>, {
        onMouseEnterCallback: onMouseEnter,
        onMouseLeaveCallback: onMouseLeave,
        ref: childRef,
      })
    : children;
  /* eslint-enable indent */

  React.useEffect(() => {
    if (childRef && childRef.current) {
      // TODO: Remove console.log
      console.log(childRef.current);
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
