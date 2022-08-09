/**
 * Styling for <Typography /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import styled, { keyframes } from "styled-components";

export const StyledHeroHeadline = styled.h1`
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 10;
  font-size: 48px;
  line-height: 1;
  font-weight: 800;
  letter-spacing: -0.03em;
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 480px) {
    font-size: 80px;
    letter-spacing: -0.04em;
    padding-top: 96px;
    padding-bottom: 96px;
  }

  @media screen and (min-width: 768px) {
    font-size: 96px;
    letter-spacing: -0.05em;
    padding-top: 116px;
    padding-bottom: 116px;

    #readme & {
      padding-top: 48px;
      padding-bottom: 48px;
    }
  }
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
  box-decoration-break: none;
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
  box-decoration-break: none;
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
    stroke-dashoffset: 0;

    @media screen and (min-width: 768px) {
      animation: ${drawPathKeyframes} 1s ease-in-out forwards;
    }
  }
`;
