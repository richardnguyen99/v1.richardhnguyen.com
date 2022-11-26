/**
 * A React component that displays a dropdown menu with more items.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import { CSSTransition } from "react-transition-group";

import { CFC } from "@config/react";
import { Portal } from "@components";

import type { DropdownProps } from "./type";
import { StyledDropdown, StyledDropdownInner } from "./style";

const Dropdown: CFC<HTMLElement, DropdownProps> = ({
  children,
  content,
  placement = "bottom",
  width,
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
  const cloneChild = () =>
    React.isValidElement(children)
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        React.cloneElement(children as React.ReactElement<any>, {
          onMouseEnterCallback: onMouseEnter,
          onMouseLeaveCallback: onMouseLeave,
          ref: triggerRef,
        })
      : children;
  /* eslint-enable indent */

  const getDropdownWidth = () => {
    const validWidthValueRegex = /^\d+(\.\d+)*(px|(r?)em|vw|%)$/gm;
    if (typeof width === "string" && validWidthValueRegex.test(width))
      return width;

    return width + "px";
  };

  const getDropdownVars = () =>
    ({
      "--dropdown-width": getDropdownWidth(),
    } as React.CSSProperties);

  return (
    <>
      {cloneChild()}
      <CSSTransition in={visible} timeout={200} classNames="menu" unmountOnExit>
        <Portal visible={visible} portalId="#menu">
          <StyledDropdown style={getDropdownVars()}>
            <StyledDropdownInner>{content}</StyledDropdownInner>
          </StyledDropdown>
        </Portal>
      </CSSTransition>
    </>
  );
};

export default Dropdown;
