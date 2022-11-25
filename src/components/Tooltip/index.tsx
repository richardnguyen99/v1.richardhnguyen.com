/**
 * Tooltip
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import { CFC } from "@config/react";

import Popup from "./Popup";
import type { TooltipProps } from "./type";

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

const Tooltip: CFC<HTMLElement, TooltipProps> = ({
  children,
  content,
  placement = "bottom",
}) => {
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
          <Popup triggerNode={triggerRef.current} placement={placement}>
            {content}
          </Popup>
        </Portal>
      </CSSTransition>
    </>
  );
};

export default Tooltip;
