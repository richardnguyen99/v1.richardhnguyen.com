import { IGatsbyImageData } from "gatsby-plugin-image";

export type ArticleProps = {
  title: string;
  author: string;
  created: string;
  excerpt: string;
  tags: Array<string>;
  categories: string;
  slug: string;
  published: boolean;
  gatsbyImageData: IGatsbyImageData | null;
};
