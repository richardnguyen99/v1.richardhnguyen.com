import * as React from "react";
import { Link } from "gatsby";
import {
  MarkGithubIcon,
  MoonIcon,
  RssIcon,
  ThreeBarsIcon,
} from "@primer/octicons-react";

import Icon from "@components/Button/Icon";
import Tooltip from "@components/Tooltip";

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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/richardnguyen99/richardhnguyen.com"
            >
              <MarkGithubIcon size={16} />
            </a>
          </Icon>
        </Tooltip>
        <Tooltip message="RSS Freed" placement="bottom">
          <Link to="/rss.xml">
            <Icon size="base" onClick={() => console.log("lol")}>
              <RssIcon size={16} />
            </Icon>
          </Link>
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
