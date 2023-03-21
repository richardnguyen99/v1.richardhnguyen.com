import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import clsx from "classnames";
import {
  LogoGithubIcon,
  RepoForkedIcon,
  StarFillIcon,
} from "@primer/octicons-react";

const SwipeButton = () => {
  const id = React.useId();

  const {
    github: {
      repository: { stargazerCount, forkCount },
    },
  } = useStaticQuery<Queries.GithubQuery>(query);

  return (
    <a
      href="https://github.com/richardnguyen99/richardhnguyen.com"
      target="_blank"
      rel="noreferrer"
      className={clsx(
        "relative leading-[initial] group flex i[#333333]tems-center w-fit cursor-pointer border",
        {
          "bg-zinc-800 hover:bg-neutral-900 border-zinc-800 dark:border-zinc-600":
            true,
          "p-4 rounded-lg": true,
        }
      )}
    >
      <div className="inline-flex items-center">
        <LogoGithubIcon size={16} className="mr-3" />
        <span className="font-mono font-bold">{stargazerCount}</span>
        <StarFillIcon size={16} className="mr-2" />
        <span className="font-mono font-bold">{forkCount}</span>
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

export const query = graphql`
  query Github {
    github {
      repository(owner: "richardnguyen99", name: "richardhnguyen.com") {
        owner {
          id
        }
        name
        description
        stargazerCount
        forkCount
      }
    }
  }
`;
