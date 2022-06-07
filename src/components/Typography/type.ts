/**
 * Type definitions for <Typography /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { PropsWithChildren } from "react";

type BaseUnderlineTextProps = {
  color: string;
  [key: string]: any;
};

export type UnderlineTextProps = PropsWithChildren<BaseUnderlineTextProps>;
