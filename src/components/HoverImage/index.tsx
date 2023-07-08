import * as React from "react";

import type { HoverImageProps } from "./type";

const HoverImage: React.FC<HoverImageProps> = ({ link, children }) => {
  return (
    <div className="group scoped flex justify-center items-center">
      <div className="flex flex-shrink-0 items-center">
        <div
          className="transition-all duration-300 w-0 group-[.scoped:active]:w-[var(--rfw)] group-[.scoped:hover]:w-[var(--rfw)]"
          data-reflect-width="true"
          style={{ "--rfw": "41px" } as React.CSSProperties}
        >
          <div className="mobile:hidden w-[5.125vw] lg:w-[3.125vw] pr-[0.8vw] transition-all ease-in-out duration-300 transform-gpu scale-75 group-[.scoped:active]:scale-100 group-[.scoped:hover]:scale-100 -translate-x-6 group-[.scoped:active]:translate-x-0 group-[.scoped:hover]:translate-x-0 -translate-y-2 group-[.scoped:active]:translate-y-0 group-[.scoped:hover]:translate-y-0 rotate-[30deg] group-[.scoped:active]:rotate-0 group-[.scoped:hover]:rotate-0 opacity-0 group-[.scoped:active]:opacity-100 group-[.scoped:hover]:opacity-100">
            <svg
              className="w-full before:float-left before:pt-[100%] before:content-[''] after:block after:content-[''] after:clear-both stroke-white fill-white"
              viewBox="0 0 50 50"
            >
              <line
                className="group-[.scoped:active]:scale-y-100 group-[.scoped:hover]:scale-y-100"
                x1="0"
                y1="5"
                x2="0"
                y2="30"
                style={{ strokeWidth: 10 }}
              ></line>
              <line
                className="group-[.scoped:active]:scale-x-100 group-[.scoped:hover]:scale-x-100"
                x1="0"
                y1="30"
                x2="40"
                y2="30"
                style={{ strokeWidth: 5 }}
              ></line>
              <polygon
                className="group-[.scoped:active]:scale-x-100 group-[.scoped:hover]:hover:scale-x-100"
                points="38,16 38,44 50,30"
              ></polygon>
            </svg>
          </div>
        </div>
        <a className="block pb-3 last:pb-0" href={link}>
          {children}
        </a>
      </div>
    </div>
  );
};

export default HoverImage;
