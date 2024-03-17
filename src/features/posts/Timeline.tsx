import * as React from "react";
import clsx from "classnames";
import { graphql, useStaticQuery } from "gatsby";

import ArticleTimeline from "./ArticleTimeline";
import { transformEdge } from "./util";

const PostsTimeline: React.FC = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery<Queries.ArticleTimelineQuery>(query);

  return (
    <div
      className={clsx(
        "relative px-4 md:mx-auto",
        "md:max-w-3xl lg:max-w-4xl xl:max-w-6xl",
        "py-4 md:py-16 lg:py-20 xl:py-24"
      )}
    >
      <div
        className={clsx(
          "flex flex-col md:gap-y-10 lg:gap-y-16",
          "md:pl-10",

          "md:border-l-[3px] border-slate-200 dark:border-slate-800"
        )}
      >
        {edges.map((edge, i) => {
          return <ArticleTimeline data={transformEdge(edge.node)} key={i} />;
        })}
      </div>
    </div>
  );
};

export default PostsTimeline;

export const query = graphql`
  query ArticleTimeline {
    allMdx(
      sort: { frontmatter: { created: DESC } }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          tableOfContents(maxDepth: 2)
          timeToRead

          fields {
            excerpt
            slug
          }

          frontmatter {
            title
            author
            tags
            categories
            created(formatString: "MMM DD, YYYY")
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  quality: 100
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`;
