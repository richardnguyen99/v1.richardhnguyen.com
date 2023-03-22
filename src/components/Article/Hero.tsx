import * as React from "react";

import type { ArticleProps } from "./type";

type ArticleDataProps = {
  data: ArticleProps;
};

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & ArticleDataProps
>;

const HeroArticle: React.FC<Props> = ({ data, ...rest }) => {
  return (
    <article {...rest} className="w-full px-6">
      {data.title}
    </article>
  );
};

export default HeroArticle;
