import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import ArticleTimeline from "./ArticleTimeline";
import { transformEdge } from "./util";

const Timeline: React.FC = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery<Queries.ArticlesQuery>(query);

  return (
    <div className="relative">
      <div className="flex flex-col gap-y-16">
        {edges.map((edge, i) => (
          <ArticleTimeline data={transformEdge(edge.node)} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;

export const query = graphql`
  query Articles {
    allMdx(sort: { frontmatter: { created: DESC } }) {
      edges {
        node {
          id
          tableOfContents(maxDepth: 2)
          fields {
            excerpt
            slug
          }
          frontmatter {
            published
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
