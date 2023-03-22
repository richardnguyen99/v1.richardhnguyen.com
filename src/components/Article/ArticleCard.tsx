import * as React from "react";

import type { ArticleProps } from "./type";

type ArticleDataProps = {
  data: ArticleProps;
};

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & ArticleDataProps
>;

const ArticleCard: React.FC<Props> = ({ data, ...rest }) => {
  return (
    <article {...rest} className="w-4/12 px-6">
      {data.title}
    </article>
  );
};

export default ArticleCard;
