/**
 * Mixins to create global class names for colorizing components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import { css } from "styled-components";

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "mint",
  "teal",
  "cyan",
  "blue",
  "indigo",
  "purple",
  "pink",
  "brown",
  "gray-1",
  "gray-2",
  "gray-3",
  "gray-4",
  "gray-5",
  "gray-6",
  "gray-7",
  "gray-8",
  "gray-9",
  "gray-10",
  "gray-11",
  "gray-12",
  "gray-13",
  "gray-14",
];

const matchRootBackgroundColor = (color: string) => `
  .bg-${color} {
    background: var(--systemColor-${color});
  }
`;

const matchRootTextColor = (color: string) => `
  .text-${color} {
    color: var(--systemColor-${color});
  }
`;

const SystemColor = css`
  ${COLORS.map((color) => matchRootBackgroundColor(color).concat())}
  ${COLORS.map((color) => matchRootTextColor(color).concat())}

  .border-top {
    border-top: 1px solid rgba(0, 0, 0, 0.16);
  }
  .border-bottom {
    border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  }
  .border-left {
    border-left: 1px solid rgba(0, 0, 0, 0.16);
  }
  .border-right {
    border-right: 1px solid rgba(0, 0, 0, 0.16);
  }
`;

export default SystemColor;
