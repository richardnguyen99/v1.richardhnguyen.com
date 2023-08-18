import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC } from "gatsby";

import { SEO } from "@components/SEO";

const TagTemplate: React.FC = () => {
  return <div></div>;
};

export const Head: HeadFC = () => <SEO title="Tag post" />;

export default TagTemplate;

export const query = graphql`
  query TagPage($tag: String) {
    allMdx(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      edges {
        node {
          id
        }
      }
    }
  }
`;
