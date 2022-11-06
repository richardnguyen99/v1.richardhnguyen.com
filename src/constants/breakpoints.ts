/**
 * Breakpoints variables and their according abbreviations
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import {
  CSSObject,
  DefaultTheme,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
  ThemedCssFunction,
} from "styled-components";

export type MixinFunctionType = (
  style: TemplateStringsArray | CSSObject,
  ...interpolation: SimpleInterpolation[]
) => FlattenSimpleInterpolation;

export type BreakpointNames = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type BreakpointArray = ["xs", "sm", "md", "lg", "xl", "xxl"];

export type BreakpointValues = 340 | 640 | 768 | 1024 | 1280 | 1600;

export type BreakpointObjectType = {
  [name in BreakpointNames]: BreakpointValues;
};

export type BreakpointMixinType = {
  [name in BreakpointNames]: ThemedCssFunction<DefaultTheme>;
};

export const breakpoints: BreakpointObjectType = {
  xs: 340,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1600,
};

export default breakpoints;
