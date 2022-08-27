/**
 * Type definitions for <Footer />
 */

import { HTMLAttributes } from "react";

export type AlertStatus =
  | "primary"
  | "default"
  | "danger"
  | "warning"
  | "success";

export type AlertIconType =
  | "checkmark"
  | "question"
  | "danger"
  | "warning"
  | "information";

export type BaseCodeProps = {
  /**
   * @description rawCodeString is the raw string of in a code block that will
   * pass to <Highlight code={rawCodeString} {...others} /> to render the
   * content.
   */
  rawCodeString: string;

  /**
   * @description language will specify what syntax highlighting will be used.
   */
  language: string;

  /**
   * @description An option to render line numbers along with the content.
   */
  withLineNumbers?: boolean;

  metaString?: string;
};

export type BaseSummaryProps = {
  /**
   * @description summary will display the a short description for what content
   * is about.
   */
  summary: string;
};

export type BaseAlertProps = {
  /**
   * @description A short description or the meaning of this alert.
   */
  title?: string;

  /**
   * @description Status option used to set the theme of the <Alert />
   * component.
   */
  status?: AlertStatus;

  /**
   * @description Icon option used to set what icon to use for <Alert />.
   */
  icon?: AlertIconType;
};

export type SummaryProps = HTMLAttributes<HTMLDetailsElement> &
  BaseSummaryProps;
export type CodeProps = HTMLAttributes<HTMLPreElement> & BaseCodeProps;
export type AlertProps = HTMLAttributes<HTMLDivElement> & BaseAlertProps;
