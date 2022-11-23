/**
 * Tooltip
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import { CFC } from "@config/react";

import Popup from "./Popup";

export type TooltipProps = {
  children: React.ReactNode;

  // TODO: Update text to popup to more generic
  text?: string;
};

const Portal: CFC<HTMLElement, { visible: boolean }> = ({
  visible,
  children,
}) => {
  return (
    <>
      {visible &&
        ReactDOM.createPortal(children, document.querySelector("#tooltip"))}
    </>
  );
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
      <CSSTransition
        in={visible}
        timeout={200}
        classNames="tooltip"
        unmountOnExit
      >
        <Portal visible={visible}>
          <Popup triggerNode={triggerRef.current}>{text}</Popup>
        </Portal>
      </CSSTransition>
    </>
  );
};

export default Tooltip;
