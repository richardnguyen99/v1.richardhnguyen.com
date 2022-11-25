/**
 * Tooltip
 */

import * as React from "react";
import { CSSTransition } from "react-transition-group";

import { CFC } from "@config/react";
import { Portal } from "@components";

import Popup from "./Popup";
import type { TooltipProps } from "./type";

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
        <Portal visible={visible} portalId="#tooltip">
          <Popup triggerNode={triggerRef.current} placement={placement}>
            {content}
          </Popup>
        </Portal>
      </CSSTransition>
    </>
  );
};

export default Tooltip;
