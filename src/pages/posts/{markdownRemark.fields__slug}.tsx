import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";

import { SEO } from "@components/SEO";

const PostTemplate: React.FC<PageProps<Queries.PostTemplateQuery>> = ({
  data,
  children,
}) => {
  return (
    <div>
      <h1>PostTemplate</h1>
      <div
        id="content"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </div>
  );
};

export const query = graphql`
  query PostTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export const Head: HeadFC<Queries.PostTemplateQuery> = ({ data }) => (
  <SEO title={data.markdownRemark.frontmatter.title} />
);

export default PostTemplate;
