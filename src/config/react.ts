/**
 * Configuration for React components and functions
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { PropsWithChildren, FC, HTMLAttributes } from "react";

export type CFC<E = HTMLElement, P = unknown> = FC<
  PropsWithChildren<HTMLAttributes<E>> & P
>;
