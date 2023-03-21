import Icon from "@components/Button/Icon";
import Tooltip from "@components/Tooltip";
import { MarkGithubIcon, MoonIcon, RssIcon } from "@primer/octicons-react";
import * as React from "react";

const ToolBar: React.FC = () => {
  return (
    <div id="header-toolbar" className="flex items-center justify-center gap-4">
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
      <Tooltip message="Toggle theme" placement="bottom-start">
        <Icon onClick={() => console.log("lol")}>
          <MoonIcon size={16} />
        </Icon>
      </Tooltip>
    </div>
  );
};

export default ToolBar;
