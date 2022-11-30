/* eslint-disable indent */
/**
 * A React component for gradient text components
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import styled from "styled-components";

export const Gradient = styled.span`
  background: linear-gradient(
    -70deg,
    var(--rc-color-teal-400) 0%,
    var(--rc-color-sky-500) 100%
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
    text-decoration-color: var(--rc-color-cyan-600);
  }
`;

export default Gradient;
