/**
 * Type definition for <Navbar /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

type BaseNavbarProps = {
  [key: string]: any;
};

type BaseNavbarItemProps = BaseNavbarProps & {
  id?: string;
  icon?: boolean;
};

export type NavbarContextProps = {
  activeTab: string;
  toggleActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

export type NavbarProps = React.PropsWithChildren<BaseNavbarProps>;

export type NavbarItemProps = React.PropsWithChildren<BaseNavbarItemProps>;
