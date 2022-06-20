/**
 * A Gatsby Slug boilerplate for programmatically creating pages for posts
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import PageLayout from "@components/Layout/PageLayout";
import Container from "@components/Utility/Container";
import Content from "@components/Content";

type PostData = {
  mdx: Queries.Mdx;
};

const BlogPost = ({ data }: PageProps<PostData>) => {
  const {
    frontmatter: { title, created, update },
    timeToRead,
    body,
  } = data.mdx;

  return (
    <PageLayout title={title}>
      <Content.Header title={title}>
        <Content.FrontMatter created={created} timeToRead={timeToRead} updated={update} />
      </Content.Header>
      <Container>
        <Content>
          <MDXRenderer>{body}</MDXRenderer>
        </Content>
      </Container>
    </PageLayout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        categories
        author
        created(formatString: "YYYY-MM-DD")
        description
        tags
        title
        update
      }
      timeToRead
    }
  }
`;

export default BlogPost;
