/**
 * Prop types and interfaces for Dropdown component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import React from "react";

import type { CFC, CMouseEvCallback } from "@config/react";
import { IsLinkProps } from "@config/link";
import { ColorSystem } from "@config/color";
import { Placement } from "@config/placement";

export type ModalPlacement = Placement;

export interface DropdownItemProps extends IsLinkProps {
  color?: ColorSystem;
  icon?: "ShadedBook" | "ShadedQuestion";
  title?: string;
  colorTextOn?: "hover" | "active";
}

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
  content: DropdownItemProps[];

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
