import * as React from "react";
import clsx from "classnames";
import { twMerge } from "tailwind-merge";

import { LinkProps } from "./type";
import LinkWrapper from "./LinkWrapper";

type Props = React.PropsWithChildren<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>;

const BorderLink: React.FC<Props & LinkProps> = ({
  href,
  children,
  className,
  native = false,
  ...rest
}) => {
  return (
    <LinkWrapper
      native={native}
      href={href}
      target="_blank"
      rel="noreferrer"
      {...rest}
      className={twMerge(
        clsx(
          // general flex container
          "flex items-center gap-3 relative",

          // text styles
          "text-[3.75vw] sm:text-[4vw] md:text-[3.5vw] lg:text-[1.5vw]",
          "text-lg font-light uppercase tracking-[0.25em]",

          // text color
          "text-slate-800 dark:text-slate-200",
          "hover:text-slate-950  dark:hover:text-slate-50",

          // bottom border-like animation on hover
          "after:content-[''] after:absolute after:block",
          "after:left-0 after:bottom-0",
          "after:h-[2px] after:w-0 hover:after:w-full",
          "after:bg-sky-500",
          "after:transition-[width] after:duration-300 after:ease-in-out"
        ),
        className
      )}
    >
      {children}
    </LinkWrapper>
  );
};

export default BorderLink;
