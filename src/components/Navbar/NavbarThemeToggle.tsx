/**
 * A React component to display a switch to toggle between global theme
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import NavbarItem from "./NavbarItem";

import Tooltip from "@components/Tooltip/Tooltip";
import SVG from "@components/Svg";
import { ThemeContext } from "@contexts/Theme";

const NavbarThemeToggle: React.FC = () => {
  const themeContext = React.useContext(ThemeContext);

  const onMouseClick = React.useCallback(() => {
    console.log("???");
    themeContext.toggleTheme();
  }, [themeContext]);

  return (
    <Tooltip onClick={onMouseClick} text="Toggle theme" position="bottom-left">
      <NavbarItem id="theme" icon>
        <SVG.Sun size={16} />
      </NavbarItem>
    </Tooltip>
  );
};

export default NavbarThemeToggle;
