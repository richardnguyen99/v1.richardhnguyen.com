/**
 * Type definitions for <Content /> props
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import { PropsWithChildren, HTMLAttributes } from "react";

export type ContentTitleProps = PropsWithChildren<
  HTMLAttributes<HTMLElement> & {
    title: string;
  }
>;

export type FrontMatterProps = HTMLAttributes<HTMLDivElement> & {
  created: string;
  updated?: string;
  timeToRead: number;
};

export type ChapterProps = HTMLAttributes<HTMLElement> & {
  name: string;
  currentChapter: number;
};

export type PageProps = {
  url: string;
  title: string;
};

export type PaginationProps = HTMLAttributes<HTMLDivElement> & {
  next?: PageProps;
  prev?: PageProps;
};

export type TOCProps = PropsWithChildren<
  HTMLAttributes<HTMLElement> & {
    toc: Record<string, unknown>;
  }
>;

export type SectionProps = PropsWithChildren<
  HTMLAttributes<HTMLElement> & {
    title: string;
  }
>;

export type ThumbnailProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export type ContentProps = PropsWithChildren<HTMLAttributes<HTMLElement>>;
