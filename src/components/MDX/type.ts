/**
 * Type definitions for <Footer />
 */

import { HTMLAttributes } from "react";

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

export type BaseAlertProps = {
  /**
   * @description A short description or the meaning of this alert.
   */
  title?: string;

  /**
   * @description Color option used to set the theme of the <Alert /> component.
   */
  color?: string;
};

export type CodeProps = HTMLAttributes<HTMLPreElement> & BaseCodeProps;
export type AlertProps = HTMLAttributes<HTMLDivElement> & BaseAlertProps;
