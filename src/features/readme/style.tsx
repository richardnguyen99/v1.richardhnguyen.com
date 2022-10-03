/**
 * Styles from Hero Section in /readme
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import styled, { keyframes } from "styled-components";

export const StyledGreetingText = styled.h1`
  color: var(--systemColor-text);
  margin: 0px;
  font-size: 2rem;
  font-family: ui-monospace, "SFMono-Regular", "SF Mono", Menlo, Consolas,
    Liberation Mono, monospace;
  font-weight: 500;
  letter-spacing: normal;
`;

const wavingAnimation = keyframes`
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`;

export const StyledReadme = styled.div`
  .fade-up-enter {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
      transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    transition-delay: 0s, 0s;
  }

  .fade-up-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
      transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    transition-delay: 0s, 0s;
  }

  .waving {
    animation: ${wavingAnimation};
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    animation-delay: 400ms;
    transform-origin: 70% 70%;
    display: inline-block;
  }
`;
