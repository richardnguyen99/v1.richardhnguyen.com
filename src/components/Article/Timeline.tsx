import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import ArticleTimeline from "./ArticleTimeline";
import { transformEdge } from "./util";

const Timeline: React.FC = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery<Queries.ArticlesQuery>(query);

  return (
    <div className="relative py-12 px-6 md:max-w-3xl md:py-16 md:px-10 md:mx-auto lg:max-w-4xl lg:py-20 xl:max-w-6xl xl:py-24">
      <div className="flex flex-col gap-y-16 pl-14 sm:border-l-[3px] border-slate-200 dark:border-slate-800">
        {edges.map((edge, i) => {
          return <ArticleTimeline data={transformEdge(edge.node)} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Timeline;

export const query = graphql`
  query Articles {
    allMdx(
      sort: { frontmatter: { created: DESC } }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          tableOfContents(maxDepth: 2)
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
