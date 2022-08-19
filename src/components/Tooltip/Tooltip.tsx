/**
 * React component for <Tooltip />
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import * as ReactDOM from "react-dom";

import { StyledBaseTooltip } from "./style";
import { TooltipProps } from "./type";

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  position,
  onClick,
  ...rest
}) => {
  const wrapperRef = React.useRef<HTMLElement>(null);
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout>(null);

  const [showing, setShowing] = React.useState(false);

  const handleMouseClick = React.useCallback(
    (evt: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      onClick(evt);
    },
    [onClick]
  );

  const handleMouseEnter = React.useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setShowing(true);
    }, 500);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setShowing(false);
    clearTimeout(timeoutRef.current);
  }, []);

  const renderWrapper = () => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        const childProps = {
          ref: wrapperRef,
          onMouseEnterCallback: handleMouseEnter,
          onMouseLeaveCallback: handleMouseLeave,
          onClickCallback: handleMouseClick,
        };
        return React.cloneElement(child, childProps);
      }
    });
  };

  React.useLayoutEffect(() => {
    if (tooltipRef.current !== null) {
      const oldTooltipRect = tooltipRef.current.getBoundingClientRect();
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const bodyRect = document
        .getElementsByTagName("body")[0]
        .getBoundingClientRect();
      tooltipRef.current.style.opacity = showing ? "1" : "0";
      tooltipRef.current.style.scale = showing ? "1.2" : "1";

      if (position === "bottom-center") {
        tooltipRef.current.style.top =
          wrapperRect.top + 48 - bodyRect.top + "px";
        tooltipRef.current.style.left =
          wrapperRect.left -
          oldTooltipRect.width / 2 +
          wrapperRect.width / 2 +
          "px";
      }

      if (position === "bottom-right") {
        tooltipRef.current.style.top =
          wrapperRect.top + 48 - bodyRect.top + "px";
        tooltipRef.current.style.left =
          wrapperRect.left - oldTooltipRect.width / 2 + "px";
      }

      if (position === "bottom-left") {
        tooltipRef.current.style.top =
          wrapperRect.top + 48 - bodyRect.top + "px";
        tooltipRef.current.style.left = wrapperRect.left + "px";
      }
    }
  }, [position, showing]);

  const tooltipComponent = (
    <StyledBaseTooltip ref={tooltipRef} {...rest} position={position}>
      {text}
    </StyledBaseTooltip>
  );

  return (
    <>
      {renderWrapper()}
      {showing &&
        ReactDOM.createPortal(
          tooltipComponent,
          document.getElementById("modal")
        )}
    </>
  );
};

export default Tooltip;
