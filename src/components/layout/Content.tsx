import { graphql, PageProps, useStaticQuery } from "gatsby";
import * as React from "react";

const Template: React.FC<
  PageProps<Queries.PostQuery, { lang: string; id: string }>
> = ({ children: _children, data: _data, pageContext: pageContext }) => {
  const { allMdx } = useStaticQuery<Queries.PostQuery>(PostQuery);

  const { node: mdx } = allMdx.edges.filter(
    ({ node }) => node.id === pageContext.id
  )[0];

  return <div>{mdx.frontmatter.title}</div>;
};

export const PostQuery = graphql`
  query Post {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            date
          }
          id
          fields {
            slug
            lang
          }
        }
      }
    }
  }
`;

export default Template;
