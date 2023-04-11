import * as React from "react";

import ThemeContext from "./Context";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { ThemeType } from "./type";

type Props = React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>;

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<ThemeType>("theme", "light");

  const toggleTheme = React.useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, [setTheme]);

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-mode", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
