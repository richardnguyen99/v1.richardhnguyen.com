import * as React from "react";
import clsx from "classnames";
import {
  LogoGithubIcon,
  RepoForkedIcon,
  StarFillIcon,
} from "@primer/octicons-react";

const SwipeButton = () => {
  const id = React.useId();

  return (
    <a
      href="https://github.com/richardnguyen99/richardhnguyen.com"
      target="_blank"
      rel="noreferrer"
      className={clsx(
        "relative leading-[initial] group flex items-center w-fit cursor-pointer border",
        {
          "bg-[#2e2d2d] hover:bg-[#333333] border-zinc-800 dark:border-zinc-600":
            true,
          "p-4 rounded-lg": true,
        }
      )}
    >
      <div className="inline-flex items-center">
        <LogoGithubIcon size={16} className="mr-3" />
        <span className="font-mono font-bold">0</span>
        <StarFillIcon size={16} className="mr-2" />
        <span className="font-mono font-bold">0</span>
        <RepoForkedIcon size={16} />
      </div>
      <span className="font-mono font-bold text-sm max-w-0 whitespace-nowrap group-hover:max-w-7xl duration-700 transition-all overflow-hidden">
        <span className="mx-3">&mdash;</span>
        Source
      </span>
    </a>
  );
};

export default SwipeButton;
