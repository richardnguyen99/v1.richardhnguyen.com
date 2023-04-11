import * as React from "react";

import { ThemeContextType } from "./type";

const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType
);
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;
