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
    frontmatter: {
      title,
      created,
      update,
      featuredImage,
      featuredImageAlt,
      series,
      chapter,
      part,
      article,
    },
    timeToRead,
    excerpt,
    body,
  } = data.mdx;

  const fullTitle = `${series}: ${title}`;

  return (
    <PageLayout title={fullTitle}>
      <Content.Header title={fullTitle}>
        <Content.FrontMatter created={created} timeToRead={timeToRead} updated={update} />
        <Content.Description>{excerpt}</Content.Description>
      </Content.Header>
      {featuredImage ? (
        <Content.Thumbnail>
          <GatsbyImage
            image={featuredImage.childImageSharp.gatsbyImageData}
            alt={featuredImageAlt}
            style={{ width: "100%", marginRight: "auto", marginLeft: "auto" }}
          />
        </Content.Thumbnail>
      ) : null}

      <Content.Grid>
        <Content.Side>
          <Content.Chapter name={article} currentChapter={part} />
        </Content.Side>
        <Container>
          <Content>
            <MDXRenderer>{body}</MDXRenderer>
          </Content>
        </Container>
        <Content.Side>H1</Content.Side>
      </Content.Grid>
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
        series
        chapter
        article
        part
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
