import * as React from "react";
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
        <h3>{data.title}</h3>
        <p>{content}</p>
      </div>
      <ArrowLink native href={data.slug}>
        Read more
      </ArrowLink>
    </article>
  );
};

export default ArticleTimeline;
