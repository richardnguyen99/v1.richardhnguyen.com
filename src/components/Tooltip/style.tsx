/* eslint-disable indent */
/**
 * Styling for <Tooltip /> components
 *
 * @author Richard Nguyen <richard.ng0615@gmail.com>
 */
import styled, { css } from "styled-components";

import { TooltipPosition } from "./type";

export const StyledBaseTooltip = styled.span<{ position: TooltipPosition }>`
  position: absolute;
  white-space: nowrap;
  color: ${(props) => (props.theme.mode === "dark" ? "#141413" : "#dddddd")};
  background: ${(props) =>
    props.theme.mode === "dark" ? " #dddddd" : "#141413"};
  //border-radius: 0.3rem;
  text-align: center;
  border-radius: 6px;
  bottom: 150%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 200ms ease, scale 200ms ease;
  font-size: 0.75rem;
  letter-spacing: 0.075em;
  font-family: sans-serif;
  font-weight: 600;
  padding: 0.75rem 0.5rem;
  z-index: 100;

  &:after {
    content: "";
    position: absolute;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    z-index: 100;

    ${(props) =>
      props.position === "bottom-center" &&
      css`
        top: -40%;
        left: 50%;
        border-color: transparent transparent
          ${(props) => (props.theme.mode === "dark" ? " #dddddd" : "#141413")}
          transparent;
      `}

    ${(props) =>
      props.position == "bottom-right" &&
      css`
        top: -40%;
        left: 75%;
        border-color: transparent transparent
          ${(props) => (props.theme.mode === "dark" ? " #dddddd" : "#141413")}
          transparent;
      `}

    ${(props) =>
      props.position == "bottom-left" &&
      css`
        top: -40%;
        left: 25%;
        border-color: transparent transparent
          ${(props) => (props.theme.mode === "dark" ? " #dddddd" : "#141413")}
          transparent;
      `}
  }
`;
