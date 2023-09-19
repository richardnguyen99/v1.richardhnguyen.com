import * as React from "react";
import clsx from "classnames";
import { useRemark } from "react-remark";

import ArrowLink from "@components/Link/ArrowLink";

import type { ArticleProps } from "./type";

type Props = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

type DataProps = {
  data: ArticleProps;
};

const ArticleTimeline: React.FC<Props & DataProps> = ({ data, ...rest }) => {
  const [content, setContent] = useRemark();

  React.useEffect(() => {
    setContent(data.excerpt);
  }, [data.excerpt, setContent]);

  return (
    <article {...rest} className="relative group ">
      <ArrowLink href={`${data.slug}`} native>
        <svg
          viewBox="0 0 9 9"
          className={clsx({
            "hidden absolute overflow-visible sm:block": true,
            "right-full top-[calc(0.5rem-7px)]": true,
            "text-slate-400 dark:text-slate-600": true,
            "mr-6 sm:mr-[calc(3.5rem-3px)]": true,
            "w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)]": true,
          })}
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
          className={clsx({
            "relative -m-7 p-6 rounded-2xl": true,
            "hover:bg-slate-200 dark:hover:bg-[#0f1c1f]": true,
          })}
        >
          <h5>{data.created}</h5>
          <h3
            className={clsx("", {
              "text-3xl font-black": true,
              "mt-6": true,
              "text-sky-500 dark:text-sky-400": true,
            })}
          >
            {data.title}
          </h3>
          <p className="text-gray-800 dark:text-slate-300 mt-4">{content}</p>
          <ArrowLink
            native
            href={data.slug}
            className={clsx("font-bold inline-block mt-4", {
              "text-sky-400 hover:text-sky-500": true,
              "dark:text-sky-400 dark:hover:text-sky-300": true,

              // Scale link border horizontally on hovering
              "after:border-b-[3px] after:block after:content-['']": true,
              "after:scale-x-0 after:transition-transform duration-200": true,
              "after:border-sky-500 dark:after:border-sky-300": true,
              "hover:after:scale-x-100": true,
              "after:origin-[0%_50%]": true,
            })}
          >
            Read more &gt;
          </ArrowLink>
        </div>
      </ArrowLink>
    </article>
  );
};

export default ArticleTimeline;
