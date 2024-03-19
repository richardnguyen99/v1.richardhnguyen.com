import * as React from "react";
import clsx from "classnames";

const Privacy: React.FC = () => {
  return (
    <div
      className={clsx("py-12 px-6", {
        "md:max-w-3xl md:py-16 md:px-10 md:mx-auto": true,
        "lg:max-w-4xl lg:py-20": true,
        "xl:max-w-6xl xl:py-24": true,
      })}
    >
      <div className={clsx("flex flex-col items-center gap-4")}>
        <h1
          className={clsx(
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
            "font-semibold sm:font-bold md:font-extrabold lg:font-black"
          )}
        >
          Privacy Policy
        </h1>
        <h5 className={clsx("text-base sm:text-lg md:text-xl lg:text-2xl")}>
          Last updated: <span className="italic">March 17, 2024</span>
        </h5>
        <div className="w-full lg:max-w-3xl">
          <div className="h-80 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
