/**
 * Prop types and interfaces for Dropdown component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import React from "react";

import type { CFC, CMouseEvCallback } from "@config/react";

export type ModalPlacement =
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

export interface ModalProps {
  /**
   * @description DOM node of the trigger component.
   *
   * DOM node of the trigger component is the anchor of the tooltip component.
   */
  triggerNode?: HTMLElement;

  /**
   * @description Position of tooltip around trigger.
   * @default "bottom"
   */
  placement?: ModalPlacement;

  /**
   * @description Content of tooltip.
   */
  children: React.ReactNode;
  width: string;
  title?: string;

  onCloseCallback?: CMouseEvCallback<HTMLButtonElement>;
  onClickCallback?: CMouseEvCallback<HTMLDivElement>;
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
  placement?: ModalPlacement;

  width?: string | number;
  Overlay?: CFC<HTMLElement>;
  action?: string;
}

export type PanelProps = Pick<ModalProps, "title" | "onCloseCallback">;
