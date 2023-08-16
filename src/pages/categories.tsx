import * as React from "react";

import { SEO } from "@components/SEO";

const CategoryPage: React.FC = () => {
  return (
    <div className="relative scroll-smooth overflow-x-hidden">
      <div className="flex flex-col justify-between">
        <div className="flex w-full">
          <div className="relative flex min-h-[276px] h-full w-full justify-center">
            <div className="absolute top-0 left-0 h-full w-full">
              <div className="absolute top-1/2 left-1/2 h-[300px] w-[1020px] -translate-x-1/2 -translate-y-3/4 rounded-[100%] opacity-70 blur-[60px] bg-[#F6FCFF] dark:bg-[#0B1416]" />
              <div
                style={{ backgroundSize: "20px 20px" }}
                className="absolute top-0 left-0 h-full w-full opacity-10 bg-[linear-gradient(to_top,#000_0%,transparent_5%),linear-gradient(to_left,#000_0%,transparent_5%)] dark:bg-[linear-gradient(to_top,#FFF_0%,transparent_5%),linear-gradient(to_left,#FFF_0%,transparent_5%)]"
              />
              <div className="absolute bottom-0 left-0 h-[80px] w-full bg-[linear-gradient(rgba(255,255,255,0),#FFF)] dark:bg-[linear-gradient(rgba(0,0,0,0),#0B1416)]" />
            </div>
            <div className="z-10 px-6 md:max-w-3xl md:px-10 lg:max-w-4xl xl:max-w-6xl w-full flex items-center justify-center">
              <h1 className="text-6xl font-black uppercase tracking-tight">
                Pick your interest
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export const Head = () => <SEO title="Categories" />;

export default CategoryPage;
