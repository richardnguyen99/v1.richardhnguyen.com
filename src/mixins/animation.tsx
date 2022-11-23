import { css } from "styled-components";

const animation = css`
  .tooltip-enter {
    opacity: 0;
    transform: scale(0.9);
  }

  .tooltip-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 0.2s;
  }

  .tooltip-exit {
    opacity: 1;
  }

  .tooltip-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.2s;
  }
`;

export default animation;
