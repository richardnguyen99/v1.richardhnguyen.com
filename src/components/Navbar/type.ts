/**
 * Type definition for <Navbar /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import { MouseEvent as ReactMouseEvent } from "react";

export type ButtonMouseEvent = ReactMouseEvent<
  HTMLButtonElement | HTMLDivElement,
  MouseEvent
>;

type BaseNavbarProps = React.HTMLAttributes<HTMLElement>;

type BaseNavbarItemProps = BaseNavbarProps & {
  id?: string;
  icon?: boolean;
  internal?: boolean;
  onClickCallback?: (evt: ButtonMouseEvent) => void;
  onMouseEnterCallback?: (evt: ButtonMouseEvent) => void;
  onMouseLeaveCallback?: (evt: ButtonMouseEvent) => void;
};

export type NavbarContextProps = {
  activeTab: string;
  toggleActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

export type NavbarProps = React.PropsWithChildren<BaseNavbarProps>;

export type NavbarItemProps = React.PropsWithChildren<BaseNavbarItemProps>;
