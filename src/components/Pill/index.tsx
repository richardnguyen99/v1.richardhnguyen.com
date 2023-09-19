import * as React from "react";
import clsx from "classnames";

import type { PillProps } from "./type";

const Pill: React.FC<PillProps> = ({ text, color: _color }) => {
  return (
    <div
      style={
        {
          "--line-height": "28px",
          "--text-size": "18px",
          "--dark-gradient-from": "#0ea5e9",
          "--dark-gradient-to": "#22d3ee",
          "--light-gradient-from": "#38bdf8",
          "--light-gradient-to": "#67e8f9",
        } as React.CSSProperties
      }
      className={clsx({
        "text-[var(--text-size)] leading-[var(--line-height)]": true,
        "inline-block z-[1] relative px-3 ": true,
        "before:absolute before:top-[-1px] before:left-[-1px]": true,
        "before:z-[-1] before:w-full before:h-full": true,
        "before:content-['']": true,
        "before:[background-clip:_content-box,border-box]": true,
        "before:bg-origin-border": true,
        "before:border-2 before:border-double before:border-transparent": true,
        "before:rounded-[2em]": true,

        "dark:before:[background-image:_linear-gradient(#0B1416,#0B1416),_radial-gradient(circle_at_top_left,_var(--dark-gradient-from),_var(--dark-gradient-to))]":
          true,
        "before:[background-image:_linear-gradient(#F9FBFE,#F9FBFE),_radial-gradient(circle_at_top_left,_var(--light-gradient-from),_var(--light-gradient-to))]":
          true,
        "before:transition-[background-image] before:ease-in-out": true,
        "before:duration-300": true,
      })}
    >
      <span
        style={
          {
            "--dark-gradient-from": "#0ea5e9",
            "--dark-gradient-to": "#a5f3fc",
            "--light-gradient-from": "#0284c7",
            "--light-gradient-to": "#06b6d4",
          } as React.CSSProperties
        }
        className={clsx({
          "dark:from-[var(--dark-gradient-from)] dark:to-[var(--dark-gradient-to)]":
            true,
          "from-[var(--light-gradient-from)] to-[var(--light-gradient-to)]":
            true,
          "bg-clip-text": true,
          "text-transparent": true,
          "font-semibold": true,
          "bg-gradient-70": true,
        })}
      >
        {text}
      </span>
    </div>
  );
};

export default Pill;
