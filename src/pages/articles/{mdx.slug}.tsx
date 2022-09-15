/**
 * A Gatsby Slug boilerplate for programmatically creating pages for posts.
 *
 * Essentially, it will consume contents from all MDX files in <rootDir>/blog
 * and generates the according pages.
 *
 * @see https://www.gatsbyjs.com/docs/tutorial/part-6/#task-create-blog-post-page-template
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { graphql, PageProps, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { InlineMath, BLockMath } from "react-katex";

import PageLayout from "@components/Layout/PageLayout";
import Container from "@components/Utility/Container";
import Content from "@components/Content";
import MDXComponents from "@components/MDX";

type PostData = {
  mdx: Queries.Mdx;
};

const components = {
  div: (props) => {
    if (props.className.includes("math-display")) {
      return <BLockMath math={props.children} />;
    }

    return <div {...props} />;
  },
  span: (props) => {
    if (props.className.includes("math-inline")) {
      return <InlineMath math={props.children} />;
    }

    return <span {...props} />;
  },

  Link,
  ...MDXComponents,
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
      chapterName,
      nextChapter,
      nextChapterName,
      nextChapterUrl,
      prevChapter,
      prevChapterName,
      prevChapterUrl,
      tags,
      displayTOC,
      description,
    },
    timeToRead,
    body,
    tableOfContents,
  } = data.mdx;

  return (
    <PageLayout title={title} hideNavbar>
      <Content.Header title={title}>
        <Content.FrontMatter
          created={created}
          timeToRead={timeToRead}
          updated={update}
        />
        <Content.Description>{description}</Content.Description>
        {tags ? (
          <Content.LabelContainer>
            {tags.map((tag, idx) => (
              <Content.Label key={idx}>
                <Link to={`/tags/${tag}`}>{tag}</Link>
              </Content.Label>
            ))}
          </Content.LabelContainer>
        ) : null}
      </Content.Header>
      {featuredImage ? (
        <Content.Thumbnail>
          <GatsbyImage
            image={featuredImage.childImageSharp.gatsbyImageData}
            alt={featuredImageAlt}
            style={{ width: "100%", marginRight: "auto", marginLeft: "auto" }}
          />
          <hr />
        </Content.Thumbnail>
      ) : (
        <Content.Dots />
      )}
      <Content.Grid style={{ marginTop: "66px" }}>
        <Content.Side>
          {series && <Content.Chapter name={series} currentChapter={chapter} />}
        </Content.Side>
        <Container>
          <Content>
            <MDXProvider components={{ ...components }}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
            <Content.Pagination
              next={{ url: nextChapterUrl, title: nextChapterName }}
              prev={{ url: prevChapterUrl, title: prevChapterName }}
            />
          </Content>
        </Container>
        {displayTOC && (
          <Content.Side>
            <Content.TOC toc={tableOfContents} />
          </Content.Side>
        )}
      </Content.Grid>
    </PageLayout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      tableOfContents(maxDepth: 3)
      frontmatter {
        displayTOC
        description
        author
        created(formatString: "YYYY-MM-DD")
        description
        tags
        title
        update
        series
        chapter
        chapterName
        part
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
        featuredImageAlt
        nextChapter
        nextChapterName
        nextChapterUrl
        prevChapter
        prevChapterName
        prevChapterUrl
      }
      timeToRead
      excerpt
    }
  }
`;

export default BlogPost;
