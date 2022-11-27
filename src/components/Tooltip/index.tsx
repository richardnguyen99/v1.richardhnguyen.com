/**
 * Tooltip
 */

import * as React from "react";
import { CSSTransition } from "react-transition-group";

import { CFC, CMouseEv } from "@config/react";
import { Portal } from "@components";

import Popup from "./Popup";
import type { TooltipProps } from "./type";

const Tooltip: CFC<HTMLElement, TooltipProps> = ({
  children,
  content,
  placement = "bottom",
  isModalVisible = false,
  onClickCallback,
}) => {
  const triggerRef = React.useRef<HTMLElement>(null);
  const [visible, setVisible] = React.useState(false);

  const onMouseEnter = React.useCallback(() => {
    if (!isModalVisible) setVisible(true);
  }, [isModalVisible]);

  const onMouseLeave = React.useCallback(() => {
    setVisible(false);
  }, []);

  const onClick = React.useCallback(
    (e: CMouseEv<HTMLButtonElement>) => {
      if (onClickCallback) onClickCallback(e);

      setVisible(false);
    },
    [onClickCallback]
  );

  /* eslint-disable indent */
  const cloneChild = React.isValidElement(children)
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      React.cloneElement(children as React.ReactElement<any>, {
        onMouseEnterCallback: onMouseEnter,
        onMouseLeaveCallback: onMouseLeave,
        onClickCallback: onClick,
        ref: triggerRef,
      })
    : children;
  /* eslint-enable indent */

  React.useEffect(() => {
    if (isModalVisible) setVisible(false);
  }, [isModalVisible]);

  return (
    <>
      <CSSTransition
        in={visible}
        timeout={200}
        classNames="tooltip"
        unmountOnExit
      >
        <Portal portalId="#tooltip">
          <Popup triggerNode={triggerRef.current} placement={placement}>
            {content}
          </Popup>
        </Portal>
      </CSSTransition>
      {cloneChild}
    </>
  );
};

export default Tooltip;
