import * as React from "react";

import type { HoverImageProps } from "./type";

const HoverImage: React.FC<HoverImageProps> = ({ link, children, srcId }) => {
  const holderRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const mouseEnterHandler: React.MouseEventHandler<HTMLDivElement> =
    React.useCallback((e) => {
      if (!holderRef.current || !containerRef.current) return;

      containerRef.current.style.setProperty("visibility", "visible");
      containerRef.current.style.setProperty("--dx", e.clientX + "px");
      containerRef.current.style.setProperty("--dy", e.clientY + "px");
      holderRef.current.classList.add("opacity-100");
    }, []);

  const mouseMoveHandler: React.MouseEventHandler<HTMLDivElement> =
    React.useCallback(() => {
      return;
    }, []);

  const mouseLeaveEnter: React.MouseEventHandler<HTMLDivElement> =
    React.useCallback(() => {
      if (!holderRef.current || !containerRef.current) return;

      containerRef.current.style.removeProperty("visibility");
      holderRef.current.classList.remove("opacity-100");
    }, []);

  React.useEffect(() => {
    const holder = document.querySelector(`[data-holder-id="${srcId}"]`);
    const container = document.querySelector("[data-image-holder='something']");

    holderRef.current = holder as HTMLDivElement;
    containerRef.current = container as HTMLDivElement;
  }, [srcId]);

  return (
    <div
      className="group scoped flex justify-center items-center"
      onMouseEnter={mouseEnterHandler}
      onMouseMove={mouseMoveHandler}
      onMouseLeave={mouseLeaveEnter}
    >
      <div className="flex flex-shrink-0 items-center">
        <div
          className="transition-all duration-300 w-0 group-[.scoped:active]:w-[var(--rfw)] group-[.scoped:hover]:w-[var(--rfw)]"
          data-reflect-width="true"
          style={{ "--rfw": "41px" } as React.CSSProperties}
        >
          <div className="mobile:hidden w-[5.125vw] lg:w-[2.75vw] pr-[0.8vw] transition-all ease-in-out duration-300 transform-gpu scale-75 group-[.scoped:active]:scale-100 group-[.scoped:hover]:scale-100 -translate-x-6 group-[.scoped:active]:translate-x-0 group-[.scoped:hover]:translate-x-0 -translate-y-2 group-[.scoped:active]:translate-y-0 group-[.scoped:hover]:translate-y-0 rotate-[30deg] group-[.scoped:active]:rotate-0 group-[.scoped:hover]:rotate-0 opacity-0 group-[.scoped:active]:opacity-100 group-[.scoped:hover]:opacity-100">
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
