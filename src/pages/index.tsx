import * as React from "react";
import clsx from "classnames";
import { ArrowRightIcon } from "@primer/octicons-react";

import { SEO } from "@components/SEO";
import TypeWriter from "@components/Typewritter";
import Articles from "@components/Article";
import LinkWrapper from "@components/Link/LinkWrapper";

const IndexPage: React.FC = () => {
  return (
    <div
      className={clsx("py-12 px-6", {
        "md:max-w-3xl md:py-16 md:px-10 md:mx-auto": true,
        "lg:max-w-4xl lg:py-20": true,
        "xl:max-w-6xl xl:py-24": true,
      })}
    >
      <TypeWriter />
      <div className="mt-12" />
      <div className="my-16 w-56 h-4 bg-gradient-to-tr from-sky-400 to-blue-500" />

      <Articles />

      <div className="my-16 w-56 h-4 bg-gradient-to-tr from-sky-400 to-blue-500" />
      <MoreContentLink />
    </div>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO title="Home" description="Home page for the blog of Richard H. Nguyen" />
);

const MoreContentLink: React.FC = () => {
  return (
    <LinkWrapper native href="/posts/">
      <div className="group flex items-center gap-3 mt-16 text-blue-500">
        <h3
          className={clsx("text-5xl font-black", {
            " text-transparent bg-clip-text": true,
            "bg-gradient-to-r": true,
            "from-sky-400 to-blue-500": true,
          })}
        >
          More content
        </h3>
        <ArrowRightIcon
          size={48}
          className={clsx("transition-all duration-100", {
            "opacity-0 -translate-x-4": true,
            "group-hover:opacity-100 group-hover:translate-x-4": true,
          })}
        />
      </div>
    </LinkWrapper>
  );
};
