/**
 * Type definitions for <Select /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import { PropsWithChildren } from "react";

export type BaseSelectProps = {
  [key: string]: any;
};

export type SelectProps = PropsWithChildren<BaseSelectProps>;
