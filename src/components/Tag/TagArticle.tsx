import * as React from "react";
import clsx from "classnames";
import { RocketIcon } from "@primer/octicons-react";
import { Link } from "gatsby";
import { useRemark } from "react-remark";

import type { TagArticleProps } from "./types";
import { GatsbyImage } from "gatsby-plugin-image";

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & TagArticleProps
>;

const TagArticle: React.FC<Props> = ({
  slug,
  title,
  excerpt,
  created,
  image,
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
        <div
          className={clsx(
            "flex items-center gap-4",
            "relative z-10 -rounded-xl my-1 py-8",
            "bg-gray-100 dark:bg-[rgb(16,25,27)]",
            " shadow-lg drop-shadow-md",
            "dark:shadow-none dark:border",
            "shadow-gray-300 dark:border-[rgb(41,50,52)]"
          )}
        >
          <div
            className={clsx(
              "my-4 ml-12 w-8/12 h-full flex flex-col",
              "gap-2 md:gap-4 lg:gap-6"
            )}
          >
            <Link
              to={slug}
              className={clsx(
                "relative block w-fit",
                "bg-transparent hover:bg-gradient-70",
                "from-blue-500 to-cyan-400",
                "dark:from-sky-400 dark:to-cyan-100",
                "bg-clip-text hover:text-transparent hover:after:w-full",
                "after:absolute after:content-[''] after:h-[2px] after:w-0",
                "after:bg-gradient-70",
                "after:from-blue-500 after:to-cyan-400",
                "dark:after:from-sky-400 dark:after:to-cyan-100",
                "after:bg-clip-content",
                "after:transition-[width]",
                "after:duration-300 after:ease-in-out"
              )}
            >
              <h3
                className={clsx(
                  "text-xl md:text-2xl lg:text-3xl",
                  "font-semibold md:font-bold lg:font-extrabold"
                )}
              >
                {title}
              </h3>
            </Link>
            <div>
              <p
                className={clsx(
                  "text-sm font-normal lg:leading-4",
                  "md:text-base md:font-semibold lg:leading-5",
                  "lg:text-lg lg:font-bold lg:leading-6",
                  "text-slate-500 dark:text-slate-400",

                  // Cannot access the content rendered by react-remark
                  "[&_a]:underline",
                  "[&_code]:text-slate-900",
                  "[&_strong]:text-slate-900",
                  "[&_code]:dark:text-slate-200",
                  "[&_strong]:dark:text-slate-200",

                  "[&>p]:max-h-12",
                  "[&>p]:text-ellipsis",
                  "[&>p]:overflow-hidden",
                  "[&>p]:line-clamp-2",
                  "[&>p]:[box-orient:vertical]"
                )}
              >
                {content}
              </p>
            </div>
          </div>
          {typeof image !== "undefined" && (
            <div className="w-4/12 h-full mr-12">
              <div className="flex w-full">
                <GatsbyImage
                  alt={`${title}-thumbnail`}
                  image={image}
                  className={clsx(
                    "ml-auto object-cover",
                    "max-h-[120px] max-w-[calc(16/9*120px)]"
                  )}
                  imgClassName={clsx(
                    "hover:scale-105 duration-300",
                    "ease-in-out !transition-[transform,opacity]"
                  )}
                />
              </div>
            </div>
          )}
        </div>
      </article>
      <div className="relative flex z-10 items-center gap-2">
        <div className={clsx("relative flex flex-col items-center", "w-1/12")}>
          <div
            className={clsx(
              "w-10 h-10 rounded-full",
              "flex items-center justify-center",
              "bg-slate-100 dark:bg-[rgb(26,35,37)]",
              "shadow-lg shadow-slate-300 dark:shadow-none",
              "dark:border border-[rgb(71,80,82)]"
            )}
          >
            <RocketIcon size={16} className="inline-block w-4 h-4" />
          </div>
        </div>

        <div
          className={clsx(
            "text-sm md:text-base lg:text-lg",
            "w-full sm:9/12 md:w-7/12 lg:w-5/12",
            "pl-4 md:pl-2 lg:pl-1",
            "text-slate-600 dark:text-slate-400"
          )}
        >
          Published at:
          <span className="font-mono text-slate-900 dark:text-slate-200 ml-2">
            {created}
          </span>
        </div>
      </div>
    </>
  );
};

export default TagArticle;
