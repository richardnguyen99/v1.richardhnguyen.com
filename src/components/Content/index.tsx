import * as React from "react";
import clsx from "classnames";
import { GatsbyImage } from "gatsby-plugin-image";
import Toc from "./toc";

type Props = {
  data: Queries.PostTemplateQuery;
};

const Content: React.FC<React.HTMLAttributes<HTMLDivElement> & Props> = ({
  data: { markdownRemark: _data },
  ...rest
}) => {
  const formatTimeToRead = (time: number) => {
    return `${time} min${time > 1 ? "s" : ""}`;
  };

  return (
    <div {...rest} id={_data.id} className="xl:mb-96">
      <div id="banner" className="pt-12 md:pt-14 lg:pt-16 xl:pt-18">
        <div
          className={clsx("px-6", {
            "md:mx-auto md:max-w-3xl md:px-10": true,
            "lg:max-w-4xl": true,
            "xl:max-w-6xl": true,
          })}
        >
          <h1
            id="title"
            className={clsx("", {
              "text-3xl md:text-4xl lg:text-5xl xl:text-6xl": true,
              "font-extrabold lg:font-black": true,
              "tracking-tight lg:tracking-tighter": true,
              "text-sky-400 hover:text-sky-500": true,
            })}
          >
            {_data.frontmatter.title}
          </h1>
          <div id="frontmatter" className="w-full mt-4 md:mt-5 lg:mt-6 xl:mt-7">
            <div className="flex items-center gap-3 w-6/12 md:w-5/12 whitespace-nowrap">
              <p>{_data.frontmatter.created}</p>
              <p>·</p>
              <p>{formatTimeToRead(_data.timeToRead)}</p>
              <p>·</p>
              <p>
                By{" "}
                <span className="font-bold border-b hover:border-b-4 cursor-pointer border-sky-500 transition-all">
                  {_data.frontmatter.author}
                </span>
              </p>
            </div>
            <GatsbyImage
              alt={_data.frontmatter.title}
              imgClassName="rounded-lg"
              className="rounded-lg my-6 lg:my-12 md:max-h-[480px] lg:max-h-[600px]"
              image={
                _data.frontmatter.thumbnail.childImageSharp.gatsbyImageData
              }
            />
            <hr className="h-[1px] rounded-xl dark:bg-zinc-700 border-none" />
          </div>
        </div>
      </div>
      <div
        className={clsx("flex items-start my-6 px-6", {
          "md:mx-auto md:max-w-3xl md:px-10": true,
          "lg:max-w-4xl lg:my-": true,
          "xl:max-w-6xl": true,
        })}
      >
        <div
          id="content"
          className="w-full xl:w-9/12"
          dangerouslySetInnerHTML={{ __html: _data.html }}
        />
        <div
          id="toc"
          className="w-0 overflow-y-hidden xl:w-3/12 xl:ml-12 xl:sticky xl:flex xl:top-16 text-sm"
        >
          <Toc toc={_data.tableOfContents} />
        </div>
      </div>
    </div>
  );
};

export default Content;
