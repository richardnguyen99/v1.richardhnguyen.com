/**
 * Breakpoint mixins
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { css } from "styled-components";

import breakpoints, {
  BreakpointMixinType,
  BreakpointNames,
} from "@constants/breakpoints";

const media = Object.keys(breakpoints).reduce(
  (accumulator: BreakpointMixinType, label: BreakpointNames) => {
    const size = breakpoints[label];

    Object.assign(accumulator, {
      [label]: (style, ...args) => css`
        @media screen and (min-width: ${size}px) {
          ${css(style, ...args)}
        }
      `,
    });

    return accumulator;
  },
  {} as BreakpointMixinType
);

export default media;
