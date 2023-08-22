import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";

import { SEO } from "@components/SEO";

type TagTemplateProps = PageProps<Queries.PostsWithTagQuery>;
type Props = React.HTMLAttributes<HTMLDivElement> & TagTemplateProps;

const TagTemplate: React.FC<Props> = ({
  data: { tagInfo, postsWithTag },
  pageContext,
}) => {
  React.useEffect(() => {
    console.log(pageContext);
  }, [pageContext]);

  return <div></div>;
};

export const Head: HeadFC = () => <SEO title="Tag post" />;

export default TagTemplate;

export const query = graphql`
  query PostsWithTag($tag: String!) {
    tagInfo: tagsJson(tag: { eq: $tag }) {
      tag
      url
      description
    }

    postsWithTag: allMdx(filter: { frontmatter: { tags: { eq: $tag } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`;
