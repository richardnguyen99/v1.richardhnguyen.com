/**
 * Main entry point for the Mdx component
 */

import React from "react";
import { HeadFC, graphql, PageProps } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

import { SEO } from "@components/SEO";

export type MdxProps = object;

const MdxRenderer: React.FC<PageProps<Queries.MdxPageQuery>> = ({
  data,
  children,
}) => {
  return <MDXProvider>{children}</MDXProvider>;
};

export default MdxRenderer;

export const Head: HeadFC<Queries.MdxPageQuery> = ({ data }) => (
  <SEO title={data.mdx.frontmatter.title} />
);

export const query = graphql`
  query MdxPage($id: String!) {
    mdx(id: { eq: $id }) {
      id
      tableOfContents(maxDepth: 2)
      body
      fields {
        slug
        excerpt
        markdownBody
        timeToRead {
          text
          minutes
          time
          words
        }
      }
      frontmatter {
        title
        created
        updated
        author
        published
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              quality: 100
              placeholder: BLURRED
            )
          }
        }
        thumbnailAuthor
        thumbnailAuthorLink
      }
    }
  }
`;
