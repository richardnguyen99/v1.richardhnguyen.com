import * as React from "react";
import { MoonIcon, SunIcon } from "@primer/octicons-react";

import Tooltip from "@components/Tooltip";
import Icon from "@components/Button/Icon";

const ThemeSwitcher: React.FC = () => {
  // TODO: Implement theme switcher with context
  const [state, setState] = React.useState<"light" | "dark">("light");

  const clickHandler = React.useCallback(() => {
    setState((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const getNextTheme = React.useCallback(() => {
    return state === "light" ? "Dark" : "Light";
  }, [state]);

  return (
    <Tooltip message={`Switch to ${getNextTheme()}`} placement="bottom-end">
      <Icon onClick={clickHandler}>
        {state === "light" ? <SunIcon size={16} /> : <MoonIcon size={16} />}
      </Icon>
    </Tooltip>
  );
};

export default ThemeSwitcher;
