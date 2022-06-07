/**
 * Styling for <Typography /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import styled, { keyframes } from "styled-components";

export const StyledHeroHeadline = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 96px;
  line-height: 1;
  font-weight: 600;
  letter-spacing: -0.015em;
  padding-top: 116px;
  padding-bottom: 116px;
  margin-bottom: 64px;
  position: relative;
  z-index: 10;
`;

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

  .underline-svg {
    position: absolute;
    width: 105%;
    height: 0.16em;
    left: -3%;
    bottom: -6%;
    z-index: -1;
  }

  .underline-path {
    clip-path: url(#underline-clip-path);
    fill: none;
    stroke: var(--systemColor-${(props) => props.underlineColor});
    stroke-linecap: round;
    stroke-miterlimit: 10;
    stroke-width: 12px;
    stroke-dasharray: 1.1;
    stroke-dashoffset: 1.1;

    animation: ${drawPathKeyframes} 1s ease-in-out forwards;
  }
`;
