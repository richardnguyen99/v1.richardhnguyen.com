/**
 * A Gatsby Slug boilerplate for programmatically creating pages for posts
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
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
    frontmatter: { title, created, update, featuredImage, featuredImageAlt },
    timeToRead,
    excerpt,
    body,
  } = data.mdx;

  return (
    <PageLayout title={title}>
      <Content.Header title={title}>
        <Content.FrontMatter created={created} timeToRead={timeToRead} updated={update} />
        <Content.Description>{excerpt}</Content.Description>
      </Content.Header>
      {featuredImage ? (
        <Content.Thumbnail>
          <GatsbyImage
            image={featuredImage.childImageSharp.gatsbyImageData}
            alt={featuredImageAlt}
            style={{ marginRight: "auto", marginLeft: "auto" }}
          />
        </Content.Thumbnail>
      ) : null}

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
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FIXED, quality: 100, width: 980)
          }
        }
        featuredImageAlt
      }
      timeToRead
      excerpt
    }
  }
`;

export default BlogPost;
