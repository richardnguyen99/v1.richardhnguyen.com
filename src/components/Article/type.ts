/**
 * Type definition for <Article /> components
 */

import { PropsWithChildren } from "react";

export type BaseArticleProps = {
  [k: string]: any;
};

export type BaseTimelineArticleProps = BaseArticleProps & {
  title: string;
  time?: string;
  tags?: string[];
  last?: boolean;
};

export type ArticleProps = PropsWithChildren<BaseArticleProps>;

export type TimelineArticleProps = PropsWithChildren<BaseTimelineArticleProps>;
