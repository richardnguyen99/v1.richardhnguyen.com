import * as React from "react";
import { useRemark } from "react-remark";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import type { ArticleProps } from "./type";

type ArticleDataProps = {
  data: ArticleProps;
};

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & ArticleDataProps
>;

const HeroArticle: React.FC<Props> = ({ data, ...rest }) => {
  const [content, setContent] = useRemark();

  React.useEffect(() => {
    setContent(data.excerpt);
  }, [data.excerpt, setContent]);

  return (
    <article {...rest} className="group block w-full px-6">
      <div className="border-t border-zinc-700" />

      <div className="py-10 flex flex-col md:flex-row-reverse -mx-6">
        <div className="w-full lg:w-8/12 px-6">
          <Link to={`/posts${data.slug}`}>
            <GatsbyImage
              aria-label="article-thumbnail"
              alt={data.title}
              image={data.gatsbyImageData}
              className="rounded-lg"
              imgClassName="rounded-lg hover:scale-[1.05]"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-between w-full lg:w-4/12 px-6">
          <div>
            <h3 className="mt-4 mb-6 lg:mt-3 lg:mb-0 text-3xl lg:text-4xl font-extrabold tracking-tight dark:hover:text-sky-500 cursor-pointer">
              <Link to={`/posts${data.slug}`}>{data.title}</Link>
            </h3>

            <p className="dark:text-neutral-400 mt-3">{content}</p>
          </div>
          <div className="mt-3 lg:mt-0 flex items-center justify-between">
            <span className="flex gap-1 font-bold">
              {data.author}
              <span className="hidden lg:block">&mdash;</span>
            </span>
            <span>{data.created}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HeroArticle;
