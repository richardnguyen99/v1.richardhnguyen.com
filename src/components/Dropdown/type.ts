/**
 * Prop types and interfaces for Dropdown component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import React from "react";

import type { CFC } from "@config/react";

export type PopupPlacement =
  | "bottom"
  | "bottom-left"
  | "bottom-right"
  | "top"
  | "top-left"
  | "top-right"
  | "right"
  | "right-top"
  | "right-bottom"
  | "left"
  | "left-top"
  | "left-bottom";

export interface PopupProps {
  /**
   * @description DOM node of the trigger component.
   *
   * DOM node of the trigger component is the anchor of the tooltip component.
   */
  triggerNode: HTMLElement;

  /**
   * @description Position of tooltip around trigger.
   * @default "bottom"
   */
  placement?: PopupPlacement;

  /**
   * @description Content of tooltip.
   */
  children: React.ReactNode;
}

export interface DropdownProps {
  /**
   * @description Trigger node of the tooltip component
   */
  children: React.ReactNode;

  /**
   * @description Content of tooltip
   */
  content: React.ReactNode;

  /**
   * @description Position of tooltip around trigger.
   * @default "bottom"
   */
  placement?: PopupPlacement;

  width?: string | number;
  Overlay?: CFC<HTMLElement>;
  action?: string;
}
