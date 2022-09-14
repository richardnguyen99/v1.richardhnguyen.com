/**
 * Type definitions for <Layout /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { HTMLAttributes, PropsWithChildren } from "react";

export interface BasePageLayoutProps extends HTMLAttributes<HTMLElement> {
  title: string;
  className?: string;
  hideNavbar?: boolean;
  hideNavbarOffset?: number;
}

export type LayoutPropsWithChildren = PropsWithChildren<
  HTMLAttributes<HTMLElement>
>;

export type PageLayoutProps = PropsWithChildren<BasePageLayoutProps>;
