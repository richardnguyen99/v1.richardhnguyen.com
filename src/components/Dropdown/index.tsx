/**
 * A React component that displays a dropdown menu with more items.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import { CSSTransition } from "react-transition-group";

import { CFC } from "@config/react";
import { Portal } from "@components";
import Popup from "@components/Tooltip/Popup";

import type { DropdownProps } from "./type";
import Modal from "./Modal";

const Dropdown: CFC<HTMLElement, DropdownProps> = ({
  children,
  content,
  placement = "bottom",
  width,
  action = "hover",
}) => {
  const triggerRef = React.useRef<HTMLElement>(null);
  const [visible, setVisible] = React.useState(false);

  const onMouseEnter = React.useCallback(() => {
    setVisible(true);
  }, []);

  const onMouseLeave = React.useCallback(() => {
    setVisible(false);
  }, []);

  const onClick = React.useCallback(() => {
    setVisible((prevState) => !prevState);
  }, []);

  /* eslint-disable indent */
  const cloneChild = React.isValidElement(children)
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      React.cloneElement(children as React.ReactElement<any>, {
        onMouseEnterCallback: action === "hover" ? onMouseEnter : undefined,
        onMouseLeaveCallback: action === "hover" ? onMouseLeave : undefined,
        onClickCallback: action === "click" ? onClick : undefined,
        ref: triggerRef,
      })
    : children;
  /* eslint-enable indent */

  const getDropdownWidth = () => {
    const validWidthValueRegex = /^\d+(\.\d+)*(px|(r?)em|vw|%)$/gm;
    if (typeof width === "string" && validWidthValueRegex.test(width))
      return width;

    return (typeof width === "undefined" ? 264 : width) + "px";
  };

  return (
    <>
      <CSSTransition in={visible} timeout={200} classNames="menu" unmountOnExit>
        <Portal portalId="#menu">
          <Modal
            width={getDropdownWidth()}
            onClickCallback={() => setVisible(false)}
          >
            {content}
          </Modal>
        </Portal>
      </CSSTransition>
      {cloneChild}
    </>
  );
};

export default Dropdown;
