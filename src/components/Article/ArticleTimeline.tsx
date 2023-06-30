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
    <article {...rest} className="relative group">
      <div className="relative">
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
      </div>
      <ArrowLink
        native
        href={data.slug}
        className={clsx("font-bold inline-block", {
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
        Read more
      </ArrowLink>
    </article>
  );
};

export default ArticleTimeline;
