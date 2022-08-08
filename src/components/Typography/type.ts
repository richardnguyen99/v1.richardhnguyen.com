/**
 * Type definitions for <Typography /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { HTMLAttributes, PropsWithChildren } from "react";

type BaseColorTextProps = HTMLAttributes<HTMLElement> & {
  color?: string;
};

export type UnderlineTextProps = PropsWithChildren<BaseColorTextProps>;
export type GradientTextProps = PropsWithChildren<BaseColorTextProps>;
