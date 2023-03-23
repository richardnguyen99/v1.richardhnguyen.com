import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
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
    <article {...rest} className="block w-full px-6">
      <div className="border-t border-zinc-700" />

      <div className="py-10 flex flex-col md:flex-row-reverse -mx-6">
        <div className="w-full lg:w-8/12 px-6">
          <GatsbyImage
            aria-label="article-thumbnail"
            alt={data.title}
            image={data.gatsbyImageData}
            className="rounded-lg"
            imgClassName="rounded-lg hover:scale-[1.05]"
          />
        </div>
        <div className="w-full lg:w-4/12 px-6">{data.title}</div>
      </div>
    </article>
  );
};

export default HeroArticle;
