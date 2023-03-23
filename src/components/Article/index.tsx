import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import ArticleCard from "./ArticleCard";

import HeroArticle from "./Hero";
import { ArticleProps } from "./type";

const ArticleContainer: React.FC = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery<Queries.ArticlesQuery>(query);

  const transformEdge = (
    node: Queries.ArticlesQuery["allMarkdownRemark"]["edges"][number]["node"]
  ): ArticleProps => {
    return {
      title: node.frontmatter.title,
      created: node.frontmatter.created,
      author: node.frontmatter.author,
      tags: node.frontmatter.tags as string[],
      categories: node.frontmatter.categories[0],
      excerpt: node.excerpt,
      gatsbyImageData:
        node.frontmatter.thumbnail.childImageSharp.gatsbyImageData,
    };
  };

  return (
    <div id="article-container" className="flex flex-wrap -mx-6 transition-all">
      <HeroArticle data={transformEdge(edges[0].node)} />
      <ArticleCard data={transformEdge(edges[0].node)} />
      <ArticleCard data={transformEdge(edges[0].node)} />
      <ArticleCard data={transformEdge(edges[0].node)} />
      <ArticleCard data={transformEdge(edges[0].node)} />
      <ArticleCard data={transformEdge(edges[0].node)} />
      <ArticleCard data={transformEdge(edges[0].node)} />
    </div>
  );
};

export default ArticleContainer;

export const query = graphql`
  query Articles {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(format: MARKDOWN)
          frontmatter {
            title
            created(formatString: "MMM DD, YYYY")
            author
            tags
            categories
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
