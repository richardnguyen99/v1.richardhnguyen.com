import * as React from "react";
import clsx from "classnames";
import { RocketIcon } from "@primer/octicons-react";
import { Link } from "gatsby";
import { useRemark } from "react-remark";

import type { TagArticleProps } from "./types";

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & TagArticleProps
>;

const TagArticle: React.FC<Props> = ({
  slug,
  title,
  excerpt,
  created,
  className: _className,
  ...rest
}) => {
  const [content, setContent] = useRemark();

  React.useEffect(() => {
    setContent(excerpt);
  }, [excerpt, setContent]);

  return (
    <>
      <article {...rest} className="group relative">
        <div></div>
        <div className="relative flex items-center gap-4 -my-1 py-8 bg-gray-100 dark:bg-[rgb(16,25,27)] z-10 rounded-xl shadow-lg shadow-gray-300 drop-shadow-md dark:shadow-none dark:border dark:border-[rgb(41,50,52)]">
          <div className="m-4 ml-12 w-8/12 flex flex-col gap-6">
            <Link
              to={slug}
              className={clsx("relative block w-fit", {
                "bg-transparent": true,
                "hover:bg-gradient-70": true,
                "from-blue-500 to-cyan-400": true,
                "dark:from-sky-400 dark:to-cyan-100": true,
                "bg-clip-text": true,
                "hover:text-transparent": true,
                "after:absolute after:content-['']": true,
                "after:h-[2px] after:w-0": true,
                "hover:after:w-full": true,
                "after:bg-gradient-70": true,
                "after:from-blue-500 after:to-cyan-400": true,
                "dark:after:from-sky-400 dark:after:to-cyan-100": true,
                "after:bg-clip-content": true,
                "after:transition-[width]": true,
                "after:duration-300 after:ease-in-out": true,
              })}
            >
              <h3 className="text-3xl font-bold">{title}</h3>
            </Link>
            <div>
              <p
                className={clsx("", {
                  "text-lg font-semibold leading-6": true,
                  "text-slate-500 dark:text-slate-400": true,
                  "[&_a]:underline": true,
                  "[&_code]:text-slate-900": true,
                  "[&_strong]:text-slate-900": true,
                  "[&_code]:dark:text-slate-200": true,
                  "[&_strong]:dark:text-slate-200": true,
                  "[&>p]:max-h-12": true,
                  "[&>p]:text-ellipsis": true,
                  "[&>p]:overflow-hidden": true,
                  "[&>p]:line-clamp-2": true,
                  "[&>p]:[box-orient:vertical]": true,
                })}
              >
                {content}
              </p>
            </div>
          </div>
        </div>
      </article>
      <div className="relative flex z-10 items-center">
        <div className="w-1/12 h-full flex flex-col items-center ">
          <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-[rgb(26,35,37)] shadow-lg shadow-slate-300 dark:shadow-none flex items-center justify-center dark:border border-[rgb(71,80,82)]">
            <RocketIcon size={16} className="inline-block w-4 h-4" />
          </div>
        </div>
        <div className="w-5/12 text-slate-600 dark:text-slate-400">
          Created at:
          <span className="font-mono text-slate-900 dark:text-slate-200 ml-2">
            {created}
          </span>
        </div>
      </div>
    </>
  );
};

export default TagArticle;
