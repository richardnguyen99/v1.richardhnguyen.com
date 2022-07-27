/**
 * Styling for <Typography /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import styled, { keyframes, css } from "styled-components";

export const StyledHeroHeadline = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 96px;
  line-height: 1;
  font-weight: 800;
  letter-spacing: -0.03em;
  padding-top: 116px;
  padding-bottom: 116px;
  margin-bottom: 64px;
  position: relative;
  z-index: 10;
`;

export const StyledGradientBlueText = styled.span`
  background: linear-gradient(
    -70deg,
    var(--systemColor-teal) 0%,
    var(--systemColor-blue) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: none;
  position: relative;

  &:hover {
    text-decoration: underline;
    text-decoration-color: currentcolor;
    text-decoration-thickness: auto;
    text-decoration-thickness: 0.1em;
    text-decoration-color: var(--systemColor-cyan);
  }
`;

export const StyledGradientGreenText = styled.span`
  background: linear-gradient(
    -70deg,
    rgb(4, 160, 82) 0%,
    var(--systemColor-green) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: none;
  position: relative;

  &:hover {
    text-decoration: underline;
    text-decoration-color: currentcolor;
    text-decoration-thickness: auto;
    text-decoration-thickness: 0.1em;
    text-decoration-color: var(--systemColor-green);
  }
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
    bottom: -10%;
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
