import * as React from "react";
import clsx from "classnames";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import type { HeadFC, PageProps } from "gatsby";

import { SEO } from "@components/SEO";
import TagTemplateLine from "@components/Tag/TagTemplateLine";
import Pill from "@components/Pill";
import TagArticle from "./TagArticle";

type TagTemplateProps = PageProps<Queries.PostsWithTagQuery>;
type Props = React.HTMLAttributes<HTMLDivElement> & TagTemplateProps;

/**
 * @description Template for genernating pages for each specific tag controlled
 * by `gatsby-node.ts`.
 */
const TagTemplate: React.FC<Props> = ({
  data: { tagInfo, postsWithTag: _posts, file: thumbnail },
  pageContext: _pageContext,
}) => {
  const { display, url, description } = tagInfo;

  return (
    <div
      className={clsx({
        "mx-auto px-6 md:px-10 w-full": true,
        "md:max-w-3xl lg:max-w-4xl xl:max-w-6xl ": true,
      })}
    >
      <div className="flex w-full relative overflow-hidden">
        <GatsbyImage
          className={clsx({
            "!hidden dark:!block !absolute": true,
            "top-[-25%] right-0": true,
            "h-auto w-11/12": true,
            "pointer-events-none": true,
          })}
          image={thumbnail.childImageSharp.gatsbyImageData}
          alt="tag-hero-thumbnail"
        />
        <div className="w-1/12 flex flex-col relative items-center">
          <div
            className={clsx({
              "relative z-10": true,
              "h-full w-[2px] md:w-[3px]": true,
              "bg-[linear-gradient(#F8FAFC,_#06b6d4,_#06b6d4,_#F8FAFC)]": true,
              "dark:bg-[linear-gradient(#0B1416,_#06b6d4,_#06b6d4,_#0B1416)]":
                true,
            })}
          />
          <div
            className={clsx({
              "hidden md:block absolute": true,
              "top-1/2 bottom-0 w-[81px] h-[485px]": true,
              "translate-x-[calc(50%-2px)] translate-y-[-50%]": true,
            })}
          >
            <TagTemplateLine />
          </div>
        </div>
        <div className="w-11/12 ml-2 md:ml-12">
          <div className="my-6 md:my-48 py-4">
            <div className="py-3 w-10/12 md:w-8/12 lg:w-6/12">
              {url !== null && (
                <a href={url} className="group flex items-center">
                  <Pill color="blue" text={url} />
                  <div
                    className={clsx({
                      "text-sky-500 font-semibold": true,
                      "opacity-0 -translate-x-1/4": true,
                      "group-hover:translate-x-2 group-hover:opacity-100": true,
                      "transition-[opacity,transform]": true,
                      "duration-500 ease-in-out": true,
                      "hover:border-b border-sky-500": true,
                    })}
                  >
                    Go to the official site
                  </div>
                </a>
              )}
              <h3
                className={clsx(
                  "text-7xl font-bold first-letter:uppercase my-4",
                  {
                    "bg-gradient-70": true,
                    "bg-clip-text": true,
                    "text-transparent": true,
                    "from-sky-500 to-cyan-300": true,
                    "dark:from-sky-400 dark:to-cyan-200": true,
                  }
                )}
              >
                {display}
              </h3>
              <div className="max-w-6/12 text-2xl font-bold">{description}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex flex-col justify-center gap-10">
          {_posts.edges.map(({ node: { frontmatter, fields } }, _key) => (
            <TagArticle
              key={_key}
              slug={fields.slug}
              created={frontmatter.created}
              title={frontmatter.title}
              excerpt={fields.excerpt}
              image={frontmatter.thumbnail.childImageSharp.gatsbyImageData}
            />
          ))}
        </div>
        <div
          className={clsx({
            "absolute flex flex-col items-center": true,
            "w-1/12 h-[calc(100%-128px)] bottom-0 z-0 ": true,
          })}
        >
          <div
            className={clsx("", {
              "relative z-10": true,
              "h-full w-[2px] md:w-[3px]": true,
              "bg-[linear-gradient(#F8FAFC,_#06b6d4,_#06b6d4,_#F8FAFC)]": true,
              "dark:bg-[linear-gradient(#0B1416,_#06b6d4,_#06b6d4,_#0B1416)]":
                true,
            })}
          />
        </div>
      </div>
    </div>
  );
};

export const Head: HeadFC = () => <SEO title="Tag post" />;

export default TagTemplate;

export const query = graphql`
  query PostsWithTag($tag: String!) {
    file(relativePath: { eq: "tag/bg-stars-1.png" }) {
      id
      childImageSharp {
        gatsbyImageData
      }
    }

    tagInfo: tagsJson(tag: { eq: $tag }) {
      tag
      display
      url
      description
    }

    postsWithTag: allMdx(
      filter: { frontmatter: { tags: { eq: $tag }, published: { eq: true } } }
    ) {
      edges {
        node {
          id

          fields {
            slug
            excerpt
          }

          frontmatter {
            title
            tags
            created(formatString: "MMMM do, YYYY")
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
