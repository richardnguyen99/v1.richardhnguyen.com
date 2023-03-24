import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";

import { SEO } from "@components/SEO";

type PostTemplateProps = Queries.PostTemplateQuery;

const PostTemplate: React.FC<PageProps<PostTemplateProps>> = ({
  data: _queriedData,
}) => {
  const data = _queriedData.markdownRemark;

  return (
    <div id={data.id}>
      <div id="content" dangerouslySetInnerHTML={{ __html: data.html }} />
    </div>
  );
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
