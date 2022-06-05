/**
 * Type definitions for <Layout /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { PropsWithChildren, ClassAttributes } from "react";

export interface LayoutProps {
  [k: string]: any;
}

export interface PageLayoutProps extends LayoutProps {
  title: string;
  className?: string;
}

export type LayoutPropsWithChildren = PropsWithChildren<LayoutProps>;

export type PageLayoutPropsWithChildren = PropsWithChildren<PageLayoutProps>;
