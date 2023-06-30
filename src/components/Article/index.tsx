import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

import HeroArticle from "./Hero";
import ArticleCard from "./ArticleCard";
import { transformEdge } from "./util";

const ArticleContainer: React.FC = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery<Queries.ArticlesQuery>(query);

  return (
    <div id="article-container" className="flex flex-wrap -mx-6 transition-all">
      <HeroArticle data={transformEdge(edges[0].node)} />

      {edges.map((edge, i) => {
        if (i === 0) return;

        if (edge.node.frontmatter.thumbnail === null) return;

        return <ArticleCard key={i} data={transformEdge(edge.node)} />;
      })}
    </div>
  );
};

export default ArticleContainer;

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
