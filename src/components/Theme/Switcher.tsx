import * as React from "react";
import { MoonIcon, SunIcon } from "@primer/octicons-react";

import Tooltip from "@components/Tooltip";
import Icon from "@components/Button/Icon";

import ThemeContext from "./Context";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const clickHandler = React.useCallback(() => {
    setTheme();
  }, [setTheme]);

  const getNextTheme = React.useCallback(() => {
    return theme === "light" ? "Dark" : "Light";
  }, [theme]);

  return (
    <Tooltip message={`Switch to ${getNextTheme()}`} placement="bottom-end">
      <Icon onClick={clickHandler}>
        {theme === "light" ? <SunIcon size={16} /> : <MoonIcon size={16} />}
      </Icon>
    </Tooltip>
  );
};

export default ThemeSwitcher;
