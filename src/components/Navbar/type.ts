/**
 * Type definition for <Navbar /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

type BaseNavbarProps = {
  [key: string]: any;
};

export type NavbarProps = React.PropsWithChildren<BaseNavbarProps>;
