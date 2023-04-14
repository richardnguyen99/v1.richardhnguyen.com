import * as React from "react";
import clsx from "classnames";

import SwipeButton from "@components/Button/SwipeButton";
import { SEO } from "@components/SEO";
import TypeWriter from "@components/Typewritter";
import Articles from "@components/Article";

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
    </div>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO title="Home" description="Home page for the blog of Richard H. Nguyen" />
);
