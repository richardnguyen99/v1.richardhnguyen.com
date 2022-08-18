/**
 * A React context to store the global theme state.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";

import { IThemeContext, ThemeContextProps, ThemeValue } from "./type";

import hook from "@hooks";

export const ThemeContext = React.createContext<IThemeContext>(
  {} as IThemeContext
);
ThemeContext.displayName = "MainThemeContext";

const ThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const [value, setValue] = hook.useLocalStorage<ThemeValue>("theme", "light");

  const toggleTheme = React.useCallback(() => {
    if (value === "light") setValue("dark");
    else setValue("light");
  }, [setValue, value]);

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", value);
    }
  }, [value]);

  return (
    <ThemeContext.Provider value={{ theme: value, toggleTheme }}>
      <SCThemeProvider theme={{ theme: value }}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
