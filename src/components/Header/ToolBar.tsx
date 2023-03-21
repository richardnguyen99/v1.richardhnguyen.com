import Icon from "@components/Button/Icon";
import { MarkGithubIcon, MoonIcon, RssIcon } from "@primer/octicons-react";
import * as React from "react";

const ToolBar: React.FC = () => {
  return (
    <div id="header-toolbar" className="flex items-center justify-center gap-4">
      <Icon onClick={() => console.log("lol")}>
        <MarkGithubIcon size={16} />
      </Icon>
      <Icon size="base" onClick={() => console.log("lol")}>
        <RssIcon size={16} />
      </Icon>
      <Icon onClick={() => console.log("lol")}>
        <MoonIcon size={16} />
      </Icon>
    </div>
  );
};

export default ToolBar;
