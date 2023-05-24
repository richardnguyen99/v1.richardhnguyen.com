/**
 * Main entry point for the Mdx component
 */

import React from "react";
import clsx from "classnames";
import { HeadFC, graphql, PageProps } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { GatsbyImage } from "gatsby-plugin-image";

import { SEO } from "@components/SEO";
import TOC from "@components/Mdx/TOC";

type MdxPageProps = PageProps<Queries.MdxPageQuery>;
type Props = React.HTMLAttributes<HTMLDivElement> & MdxPageProps;

const MdxRenderer: React.FC<Props> = ({ data: { mdx }, children }) => {
  const formatTimeToRead = (time: number) => {
    return `${Math.ceil(time)} min${time > 1 ? "s" : ""}`;
  };

  return (
    <div id={mdx.id} className="xl:mb-96">
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
              "text-transparent bg-clip-text bg-gradient-to-r to-sky-200 from-cyan-500":
                true,
              "font-extrabold gradient lg:font-black": true,
              "tracking-tight lg:tracking-tighter": true,
            })}
          >
            {mdx.frontmatter.title}
          </h1>
          <div id="frontmatter" className="w-full mt-4 md:mt-5 lg:mt-6 xl:mt-7">
            <div className="flex items-center gap-3 w-6/12 md:w-5/12 whitespace-nowrap">
              <p>{mdx.frontmatter.created}</p>
              <p>·</p>
              <p>{formatTimeToRead(mdx.fields.timeToRead.minutes)}</p>
              <p>·</p>
              <p>
                By{" "}
                <span className="font-bold border-b hover:border-b-4 cursor-pointer border-sky-500 transition-all">
                  {mdx.frontmatter.author}
                </span>
              </p>
            </div>
            <div>
              {mdx.frontmatter.thumbnail && (
                <>
                  <GatsbyImage
                    alt={mdx.frontmatter.title}
                    imgClassName="rounded-lg"
                    className="rounded-lg mt-6 lg:mt-12 md:max-h-[480px] lg:max-h-[600px]"
                    image={
                      mdx.frontmatter.thumbnail.childImageSharp.gatsbyImageData
                    }
                  />
                  {mdx.frontmatter.thumbnailAuthor && (
                    <div className="text-center mb-6">
                      Source:{" "}
                      <a
                        href={mdx.frontmatter.thumbnailAuthorLink}
                        className="font-bold border-b hover:border-b-4 cursor-pointer border-sky-500 transition-all"
                      >
                        {mdx.frontmatter.thumbnailAuthor}
                      </a>
                    </div>
                  )}
                </>
              )}
            </div>
            <hr className="h-[1px] mt-6 lg:mt-12 rounded-xl dark:bg-zinc-700 border-none" />
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
        <div id="content" className="w-full xl:w-9/12">
          <MDXProvider>{children}</MDXProvider>
        </div>
        <div
          id="toc"
          className="hidden xl:w-3/12 xl:ml-12 xl:sticky xl:flex xl:top-16 text-sm"
        >
          <TOC id="toc" toc={mdx.tableOfContents} />
        </div>
      </div>
    </div>
  );
};

export default MdxRenderer;

export const Head: HeadFC<Queries.MdxPageQuery> = ({ data }) => (
  <SEO title={data.mdx.frontmatter.title} />
);

export const query = graphql`
  query MdxPage($id: String!) {
    mdx(id: { eq: $id }) {
      id
      tableOfContents(maxDepth: 2)
      body
      fields {
        slug
        excerpt
        markdownBody
        timeToRead {
          text
          minutes
          time
          words
        }
      }
      frontmatter {
        title
        created
        updated
        author
        published
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              quality: 100
              placeholder: BLURRED
            )
          }
        }
        thumbnailAuthor
        thumbnailAuthorLink
      }
    }
  }
`;
