import * as React from "react";
import clsx from "classnames";

import { SEO } from "@components/SEO";
import TypeWriter from "@components/Typewritter";
import Articles from "@components/Article";
import ArrowLink from "@components/Link/ArrowLink";
import { ArrowRightIcon } from "@primer/octicons-react";

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
    <ArrowLink native href="/posts/">
      <div className="group flex items-center gap-3 text-sky-500">
        <h3 className="text-5xl font-black">More content</h3>
        <ArrowRightIcon
          size={48}
          className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-100"
        />
      </div>
    </ArrowLink>
  );
};
