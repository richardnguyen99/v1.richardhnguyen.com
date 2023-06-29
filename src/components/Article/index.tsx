import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import ArticleCard from "./ArticleCard";

import HeroArticle from "./Hero";
import { ArticleProps } from "./type";

const ArticleContainer: React.FC = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery<Queries.ArticlesQuery>(query);

  const transformEdge = (
    node: Queries.ArticlesQuery["allMdx"]["edges"][number]["node"]
  ): ArticleProps => {
    return {
      title: node.frontmatter.title,
      created: node.frontmatter.created,
      author: node.frontmatter.author,
      tags: node.frontmatter.tags as string[],
      categories: node.frontmatter.categories[0],
      excerpt: node.fields.excerpt,
      slug: node.fields.slug,
      gatsbyImageData:
        node.frontmatter.thumbnail.childImageSharp.gatsbyImageData,
    };
  };

  return (
    <div id="article-container" className="flex flex-wrap -mx-6 transition-all">
      <HeroArticle data={transformEdge(edges[0].node)} />

      {edges.map((edge, i) => {
        if (i === 0) return;

        if (edge.node.frontmatter.thumbnail === null) return;

        if (!edge.node.frontmatter.published) return;

        return <ArticleCard key={i} data={transformEdge(edge.node)} />;
      })}
    </div>
  );
};

export default ArticleContainer;

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
