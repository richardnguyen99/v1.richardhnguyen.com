import SwipeButton from "@components/Button/SwipeButton";
import { SEO } from "@components/SEO";
import TypeWriter from "@components/Typewritter";
import * as React from "react";

const IndexPage: React.FC = () => {
  return (
    <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto py-12 md:py-16 lg:py-20 xl:py-24">
      <TypeWriter />
      <div className="mt-12" />
      <SwipeButton />

      <div className="my-16 w-56 h-4 bg-gradient-to-tr from-sky-400 to-blue-500" />
    </div>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO title="Home" description="Home page for the blog of Richard H. Nguyen" />
);
