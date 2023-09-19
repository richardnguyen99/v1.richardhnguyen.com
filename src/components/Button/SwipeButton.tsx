import * as React from "react";
import clsx from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import {
  LogoGithubIcon,
  RepoForkedIcon,
  StarFillIcon,
} from "@primer/octicons-react";

const SwipeButton: React.FC = () => {
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
      className={clsx({
        "relative group flex items-center": true,
        "leading-[initial] w-fit cursor-pointer border": true,
        "p-4 rounded-lg": true,
        "bg-zinc-800 hover:bg-neutral-900": true,
        "border-zinc-800 dark:border-zinc-600 text-zinc-100": true,
      })}
    >
      <div className="inline-flex items-center">
        <LogoGithubIcon size={16} className="mr-3" />
        <span className="font-mono font-bold">{stargazerCount}</span>
        <StarFillIcon size={16} className="mr-2" />
        <span className="font-mono font-bold">{forkCount}</span>
        <RepoForkedIcon size={16} />
      </div>
      <span
        className={clsx({
          "font-mono font-bold text-sm": true,
          "max-w-0 whitespace-nowrap overflow-hidden": true,
          "group-hover:max-w-7xl duration-700 transition-all": true,
        })}
      >
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
