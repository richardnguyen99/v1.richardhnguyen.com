/**
 * Type definitions for <SVG /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import { HTMLAttributes } from "react";

export type BaseSvgProps = HTMLAttributes<HTMLOrSVGElement>;

export type SVGProps = BaseSvgProps & {
  size?: number;
};
