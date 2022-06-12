/**
 * Type definitions for <Tooltip /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React, { ReactNode } from "react";

export type TooltipPosition =
  | "top-center"
  | "top-right"
  | "top-left"
  | "bottom-center"
  | "bottom-right"
  | "bottom-left";

export interface TooltipProps {
  position: TooltipPosition;
  text: string;
  children: ReactNode | ReactNode[];
  [key: string]: any;
}
