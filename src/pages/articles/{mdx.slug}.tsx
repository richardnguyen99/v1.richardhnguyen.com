/**
 * A Gatsby Slug boilerplate for programmatically creating pages for posts
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import RootLayout from "@components/Layout/RootLayout";

type PostData = {
  mdx: Queries.Mdx;
};

const BlogPost = ({ data }: PageProps<PostData>) => {
  return (
    <RootLayout>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </RootLayout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
