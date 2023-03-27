import Icon from "@components/Button/Icon";
import Tooltip from "@components/Tooltip";
import {
  MarkGithubIcon,
  MoonIcon,
  RssIcon,
  ThreeBarsIcon,
} from "@primer/octicons-react";
import * as React from "react";

const ToolBar: React.FC = () => {
  return (
    <div id="header-toolbar" className="flex items-center justify-center gap-4">
      <Tooltip className="md:hidden" message="Menu" placement="bottom-end">
        <Icon onClick={() => console.log("lol")}>
          <ThreeBarsIcon size={16} />
        </Icon>
      </Tooltip>
      <div className="hidden sm:block h-4 w-px bg-zinc-600 md:hidden" />
      <div className="hidden sm:flex items-center justify-center gap-4">
        <Tooltip message="Github" placement="bottom-end">
          <Icon onClick={() => console.log("lol")}>
            <MarkGithubIcon size={16} />
          </Icon>
        </Tooltip>
        <Tooltip message="RSS Freed" placement="bottom">
          <Icon size="base" onClick={() => console.log("lol")}>
            <RssIcon size={16} />
          </Icon>
        </Tooltip>
        <Tooltip message="Toggle theme" placement="bottom-end">
          <Icon onClick={() => console.log("lol")}>
            <MoonIcon size={16} />
          </Icon>
        </Tooltip>
      </div>
    </div>
  );
};

export default ToolBar;
