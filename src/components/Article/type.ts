/**
 * Type definition for <Article /> components
 */

import { PropsWithChildren, HTMLAttributes } from "react";

export type BaseTimelineArticleProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  time?: string;
  tags?: string[];
  last?: boolean;
};

export type TimelineArticleProps = PropsWithChildren<BaseTimelineArticleProps>;
