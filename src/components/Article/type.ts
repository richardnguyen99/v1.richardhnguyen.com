/**
 * Type definition for <Article /> components
 */

import { PropsWithChildren, HTMLAttributes } from "react";

export type BaseTimelineArticleProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  time?: string;
  tags?: readonly string[];
  last?: boolean;
  articleUrl?: string;
};

export type TimelineArticleProps = PropsWithChildren<BaseTimelineArticleProps>;

export type BaseSeeMoreProps = HTMLAttributes<HTMLElement> & {
  to: string;
};

export type SeeMoreProps = PropsWithChildren<BaseSeeMoreProps>;
