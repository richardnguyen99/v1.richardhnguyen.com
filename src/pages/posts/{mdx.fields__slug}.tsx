import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";

import { SEO } from "@components/SEO";
import Content from "@components/Content";

type PostTemplateProps = Queries.MdxPostTemplateQuery;

const PostTemplate: React.FC<PageProps<PostTemplateProps>> = ({ data }) => {
  return <h1>{data.mdx.fields.markdownBody}</h1>;
};

export const query = graphql`
  query MdxPostTemplate($id: String!) {
    mdx(id: { eq: $id }) {
      id
      excerpt
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

export const Head: HeadFC<PostTemplateProps> = ({ data }) => (
  <SEO title={data.mdx.frontmatter.title} />
);

export default PostTemplate;
