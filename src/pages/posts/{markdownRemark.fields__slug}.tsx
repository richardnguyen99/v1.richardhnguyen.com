import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";

import { SEO } from "@components/SEO";
import Content from "@components/Content";

type PostTemplateProps = Queries.PostTemplateQuery;

const PostTemplate: React.FC<PageProps<PostTemplateProps>> = ({ data }) => {
  return <Content data={data} />;
};

export const query = graphql`
  query PostTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      tableOfContents(maxDepth: 2)
      timeToRead
      frontmatter {
        title
        created(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
        author
        tags
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
`;

export const Head: HeadFC<PostTemplateProps> = ({ data }) => (
  <SEO title={data.markdownRemark.frontmatter.title} />
);

export default PostTemplate;
