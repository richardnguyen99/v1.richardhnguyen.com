/**
 * Props types and interfaces for Button components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import type { IsLinkProps } from "@config/link";
import type { CMouseEvCallback } from "@config/react";

export type ButtonVariants =
  | "active"
  | "transparent"
  | "flat"
  | "border"
  | "shadow";

export type ButtonRef = HTMLButtonElement;

export interface ButtonProps extends IsLinkProps {
  /**
   * @description Specify if a button is being disable or not.
   * @default false
   *
   * `disable` and `isLoading` will specify their own styles and override the
   * current specified style.
   */
  disabled?: boolean;

  /**
   * @description Specify if a button is loading or not.
   * @default false
   *
   * `disable` and `isLoading` will specify their own styles and override the
   * current specified style.
   */
  isLoading?: boolean;

  /**
   * @description Specify if a button wishes to be transparent (no background).
   * @default false
   *
   * A transparent button will have no background and no change on the color of
   * the content. Only hovering effect uses the specified color.
   */
  transparent?: boolean;

  /**
   * @description Specify if a button wishes to be flat.
   * @default false
   *
   * A flat button will have a background  with low opacity and a text with
   * specified color.
   */
  flat?: boolean;

  /**
   * @description Specify if a button wishes to have borders.
   * @default false
   *
   * A bordered button will have no background, but its border and content will
   * change to the specified color.
   */
  border?: boolean;

  /**
   * @description Specify the variant for a button.
   * @default "active"
   *
   * If `variant` and any of its values are specified at the same time, button
   * will choose the value and override `variant` prop.
   */
  variant?: ButtonVariants;

  /**
   * @description Specify a callback on mouse enter event.
   * @default undefined
   *
   * Button component will call a function specified by `onMouseEnterCallback`
   * prop during its own Mouse Enter Event.
   */
  onMouseEnterCallback?: CMouseEvCallback<HTMLButtonElement>;

  /**
   * @description Specify a callback on mouse leave event.
   * @default undefined
   *
   * Button component will call a function specified by `onMouseLeaveCallback`
   * prop during its own Mouse Leave Event.
   */
  onMouseLeaveCallback?: CMouseEvCallback<HTMLButtonElement>;

  /**
   * @description Specify a callback on mouse click event.
   * @default undefined
   *
   * Button component will call a function specified by `onMouseClickCallback`
   * prop during its own Mouse Click Event.
   */
  onClickCallback?: CMouseEvCallback<HTMLButtonElement>;
}
