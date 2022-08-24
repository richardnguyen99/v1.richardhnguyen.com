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
  const [localValue, setlocalValue] = hook.useLocalStorage<ThemeValue>(
    "theme",
    "light"
  );

  const [theme, setTheme] = React.useState<ThemeValue>("dark");

  const toggleTheme = React.useCallback(() => {
    if (localValue === "light") setlocalValue("dark");
    else setlocalValue("light");
  }, [setlocalValue, localValue]);

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", localValue);
    }
  }, [localValue]);

  React.useEffect(() => {
    setTheme(localValue);
  }, [localValue]);

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
      <SCThemeProvider theme={{ mode: theme }}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
