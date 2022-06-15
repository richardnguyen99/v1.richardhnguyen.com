/**
 * Type definition for <Article /> components
 */

import { PropsWithChildren } from "react";

export type BaseArticleProps = {
  [k: string]: any;
};

export type ArticleProps = PropsWithChildren<BaseArticleProps>;
