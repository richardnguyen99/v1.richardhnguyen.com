import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { useRemark } from "react-remark";

import type { ArticleProps } from "./type";

type ArticleDataProps = {
  data: ArticleProps;
};

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & ArticleDataProps
>;

const ArticleCard: React.FC<Props> = ({ data, ...rest }) => {
  const [content, setContent] = useRemark();

  React.useEffect(() => {
    setContent(data.excerpt);
  }, [data.excerpt, setContent]);

  return (
    <article {...rest} className="block w-full md:w-6/12 lg:w-4/12 px-6">
      <div className="flex flex-col py-4 md:py-6 lg:py-10 border-t border-zinc-700">
        <GatsbyImage
          aria-label="article-thumbnail"
          alt={data.title}
          image={data.gatsbyImageData}
          className="rounded-lg"
          imgClassName="rounded-lg hover:scale-[1.05]"
        />
        <h3 className="mt-4 mb-6 text-3xl lg:text-xl hover:text-sky-500 font-bold transition-all">
          <Link to="#">{data.title}</Link>
        </h3>
        <p className="dark:text-neutral-400">{content}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-bold">{data.author}</span>
          <span>{data.created}</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;