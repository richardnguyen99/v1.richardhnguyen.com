/**
 * Tooltip
 */

import * as React from "react";
import * as ReactDOM from "react-dom";

export type TooltipProps = {
  children: React.ReactNode;
  text?: string;
};

const Tooltip: React.FC<TooltipProps> = ({ children, text = "" }) => {
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
      })
    : children;
  /* eslint-enable indent */

  return (
    <>
      {cloneChild}
      {portal}
    </>
  );
};

export default Tooltip;
