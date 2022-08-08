/**
 * Type definitions for <Select /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import { HTMLAttributes, PropsWithChildren } from "react";

export type BaseSelectProps = HTMLAttributes<HTMLSelectElement>;

export type SelectProps = PropsWithChildren<BaseSelectProps>;
