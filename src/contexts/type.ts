/**
 * Typing definition for <Context /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import { PropsWithChildren } from "react";

export type ThemeValue = "light" | "dark";

export type ThemeContextProps = PropsWithChildren;

export type IThemeContext = {
  theme: ThemeValue;
  toggleTheme: () => void;
};
