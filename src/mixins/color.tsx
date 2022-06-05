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
`;

export default SystemColor;
