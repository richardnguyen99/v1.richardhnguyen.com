/**
 * A React component to render a template page for Markdown and MDX tags
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import { PageProps, graphql } from "gatsby";

import Layout from "@components/Layout";

type TagProps = Queries.TagPageQuery;

type TagContextType = {
  tag: string;
};

const Tags: React.FC<PageProps<TagProps, TagContextType>> = ({
  pageContext,
  data,
}) => {
  return (
    <Layout.Page title={`Tag: ${pageContext.tag}`}>
      {pageContext.tag}
    </Layout.Page>
  );
};

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___created], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          slug
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default Tags;
