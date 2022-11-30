/**
 * A React component for SVG-animated underline text
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";
import styled, { keyframes } from "styled-components";

import { CFC } from "@config/react";

import { ColorProps } from "./type";

const drawPathKeyframes = keyframes`
  0% {
    stroke-dashoffset: 1.1
  }
  to {
    stroke-dashoffset: 0
  }
`;

export const StyledUnderlineText = styled.em<{ underlineColor: string }>`
  position: relative;
  display: inline-block;
  font-style: normal;
  z-index: 1;
  color: var(--rc-color-white);

  .underline-svg {
    position: absolute;
    width: 105%;
    height: 0.16em;
    left: -3%;
    bottom: -10%;
    z-index: -1;
  }
  .underline-path {
    clip-path: url(#underline-clip-path);
    fill: none;
    stroke: var(--rc-color-sky-400);
    stroke-linecap: round;
    stroke-miterlimit: 10;
    stroke-width: 12px;
    stroke-dasharray: 1.1;
    stroke-dashoffset: 0;
    @media screen and (min-width: 768px) {
      animation: ${drawPathKeyframes} 1s ease-in-out forwards;
    }
  }
`;

const UnderlineText: CFC<HTMLElement, ColorProps> = ({
  color,
  children,
  ...rest
}) => {
  return (
    <StyledUnderlineText underlineColor={color} {...rest}>
      {children}
      <svg
        className="underline-svg"
        viewBox="0 0 305 15"
        preserveAspectRatio="none"
      >
        <g>
          {" "}
          <clipPath id="underline-clip-path">
            {" "}
            <path d="M146.18,1c8.46,0,16.91,0,25.37,0,4.91,0,9.78.09,14.69.37,5.44.3,11,.13,16.5.16,3.73,0,7.44.15,11.16.34,5.07.25,10.21.18,15.32.23,3.53,0,7,.19,10.56.31,6.05.22,12.12.48,18.22.31a42.08,42.08,0,0,1,5.28.1c3.7.37,7.43.32,11.16.35,3.93,0,7.85,0,11.74.4,1.7.18,3.53.07,5.29.13s3.53.11,5.27.23c4.32.3,6.39,1.62,7.14,3.5.67,1.66-1.61,3.44-5.11,3.8a49.34,49.34,0,0,1-8.73.29c-3.66-.27-7.45-.19-11.18-.23-3.93-.05-7.83-.11-11.75-.36-4.07-.25-8.24-.17-12.36-.2-3.74,0-7.46,0-11.16-.37-1.52-.15-3.13-.1-4.7-.13-8-.13-16.11.14-24.13-.48-2.3-.18-4.71-.07-7.06-.1-7-.1-14.1-.09-21.14-.45-3.3-.17-6.68-.08-10-.08q-33,0-66.07,0c-3.93,0-7.85.18-11.78.23q-15.3.18-30.6.32a100.14,100.14,0,0,0-10.56.38,16.47,16.47,0,0,1-2.34.1c-7.3-.18-14.49.48-21.74.63-3.52.07-7,.36-10.5.64a15.69,15.69,0,0,0-3.13.71c-1.17.34-2.27.72-3.35,1.11a16.45,16.45,0,0,1-6.72.68C4.61,13.59.63,11.26,1,8.89c.13-.76.81-1.38,1.8-2,3.25-2,7.91-2.71,12.81-3s9.78-.51,14.6-.85c7.61-.53,15.34-.13,22.89-.88C55,2,57.05,2.08,59,2.06c4.91,0,9.83.06,14.69-.41,1.33-.12,2.75-.07,4.12-.08,6.29,0,12.59,0,18.88-.08,4.51,0,9,.08,13.51-.38C111.72,1,113.34,1,114.92,1h31.26Z"></path>{" "}
          </clipPath>{" "}
          <path
            className="underline-path"
            pathLength="1"
            d="M6.57,8.17c107.81-3.26,287-.74,291.81-.74"
          ></path>{" "}
        </g>
      </svg>
    </StyledUnderlineText>
  );
};

export default UnderlineText;
