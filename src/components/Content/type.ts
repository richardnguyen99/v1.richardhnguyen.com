/**
 * Type definitions for <Content /> props
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import { PropsWithChildren } from "react";

type BaseProps = {
  [key: string]: any;
};

export type ContentTitleProps = PropsWithChildren<
  BaseProps & {
    title: string;
  }
>;

export type FrontMatterProps = BaseProps & {
  created: string;
  updated?: string;
  timeToRead: number;
};

export type ThumbnailProps = PropsWithChildren<BaseProps>;

export type ContentProps = PropsWithChildren<BaseProps>;
