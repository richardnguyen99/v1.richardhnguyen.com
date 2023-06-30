import type { ArticleProps } from "./type";

export const transformEdge = (
  node: Queries.ArticlesQuery["allMdx"]["edges"][number]["node"]
): ArticleProps => {
  return {
    published: true,
    title: node.frontmatter.title,
    created: node.frontmatter.created,
    author: node.frontmatter.author,
    tags: node.frontmatter.tags as string[],
    categories: node.frontmatter.categories[0],
    excerpt: node.fields.excerpt,
    slug: node.fields.slug,
    gatsbyImageData:
      node.frontmatter.thumbnail !== null
        ? node.frontmatter.thumbnail.childImageSharp.gatsbyImageData
        : null,
  };
};
