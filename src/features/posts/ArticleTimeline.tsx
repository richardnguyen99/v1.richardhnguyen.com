import * as React from "react";
import clsx from "classnames";
import { useRemark } from "react-remark";

import LinkWrapper from "@components/Link/LinkWrapper";

import type { ArticleProps } from "./type";

type Props = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

type DataProps = {
  data: ArticleProps;
};

const ArticleTimeline: React.FC<Props & DataProps> = ({ data, ...rest }) => {
  const [content, setContent] = useRemark();

  React.useLayoutEffect(() => {
    setContent(data.excerpt);
  }, [data.excerpt, setContent]);

  return (
    <article {...rest} className="relative group ">
      <div>
        <svg
          viewBox="0 0 9 9"
          className={clsx(
            "hidden absolute overflow-visible sm:block",
            "right-full top-[calc(0.5rem-7px)]",
            "text-slate-400 dark:text-slate-600",
            "mr-[calc(2.5rem-3px)]",
            "w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)]"
          )}
        >
          <circle
            cx="4.5"
            cy="4.5"
            r="4.5"
            stroke="currentColor"
            className="fill-slate-50 dark:fill-[#0B1416]"
            strokeWidth="2"
          ></circle>
        </svg>
        <div
          className={clsx(
            "flex flex-col gap-4",
            "relative md:-m-7 lg:-m-7 p-6 rounded-2xl",
            "hover:bg-slate-200 dark:hover:bg-[#0f1c1f]"
          )}
        >
          <div
            className={clsx(
              "flex flex-col gap-2",
              "text-sm md:text-base",
              "sm:flex-row sm:justify-start sm:items-center"
            )}
          >
            <h5>{data.created}</h5>
            <p className="hidden sm:block">&mdash;</p>
            <h5>{data.timeToRead.toFixed(0)} min</h5>
          </div>
          <LinkWrapper
            native
            href={data.slug}
            className={clsx(
              "text-2xl md:text-3xl lg:text-4xl",
              "font-bold md:font-extrabold lg:font-black",
              "text-sky-500 dark:text-sky-400"
            )}
          >
            {data.title}
          </LinkWrapper>
          <div
            className={clsx(
              "text-sm md:text-base",
              "line-clamp-4",
              "text-gray-800 dark:text-slate-300"
            )}
          >
            {content}
          </div>
          <div>
            <LinkWrapper
              native
              href={data.slug}
              className={clsx(
                "font-bold inline-block mt-4",
                "text-sky-400 hover:text-sky-500",
                "dark:text-sky-400 dark:hover:text-sky-300",

                // Scale link border horizontally on hovering
                "after:border-b-[3px] after:block after:content-['']",
                "after:scale-x-0 after:transition-transform duration-200",
                "after:border-sky-500 dark:after:border-sky-300",
                "hover:after:scale-x-100",
                "after:origin-[0%_50%]"
              )}
            >
              Read more &gt;
            </LinkWrapper>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleTimeline;
