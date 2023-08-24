import type { IGatsbyImageData } from "gatsby-plugin-image";

export type TagArticleProps = {
  slug: string;
  title: string;
  excerpt: string;
  created: string;
  image?: IGatsbyImageData;
};
