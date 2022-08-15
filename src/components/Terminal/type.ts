/**
 * Type definitions for <Terminal /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import { HTMLAttributes, PropsWithChildren } from "react";

export type BaseTerminalProps = {
  title?: string;
  originalLanguage?: string;
};

export type TerminalProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & BaseTerminalProps
>;
