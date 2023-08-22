/**
 * Main entry point for the Mdx component
 */

import React from "react";
import clsx from "classnames";
import { HeadFC, graphql, PageProps } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

import { SEO } from "@components/SEO";

import TOC from "./TOC";
import Title from "./Title";
import FrontMatter from "./FrontMatter";
import mdxComponents from "./components";

type MdxPageProps = PageProps<Queries.MdxPageQuery>;
type Props = React.HTMLAttributes<HTMLDivElement> & MdxPageProps;

const MdxRenderer: React.FC<Props> = ({ data: { mdx }, children }) => {
  return (
    <div id={mdx.id} className="xl:mb-96">
      <div id="banner" className="pt-12 md:pt-14 lg:pt-16 xl:pt-18">
        <div
          className={clsx("px-6", {
            "md:mx-auto md:max-w-3xl md:px-10": true,
            "lg:max-w-4xl": true,
            "xl:max-w-6xl": true,
          })}
        >
          <Title>{mdx.frontmatter.title}</Title>
          <FrontMatter
            author={mdx.frontmatter.author}
            created={mdx.frontmatter.created}
            timeToRead={mdx.fields.timeToRead.minutes}
            thumbnail={
              mdx.frontmatter.thumbnail && {
                alt: mdx.frontmatter.title,
                author: mdx.frontmatter.thumbnailAuthor,
                authorLink: mdx.frontmatter.thumbnailAuthorLink,
                data: mdx.frontmatter.thumbnail.childImageSharp.gatsbyImageData,
              }
            }
          />
        </div>
      </div>
      <div
        className={clsx("flex items-start my-6 px-6", {
          "md:mx-auto md:max-w-3xl md:px-10": true,
          "lg:max-w-4xl lg:my-": true,
          "xl:max-w-6xl": true,
        })}
      >
        <div id="content" className="w-full xl:w-9/12">
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </div>
        <div
          id="toc"
          className="hidden xl:w-3/12 xl:ml-12 xl:sticky xl:flex xl:top-16 text-sm"
        >
          <TOC id="toc" toc={mdx.tableOfContents} />
        </div>
      </div>
    </div>
  );
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
        created(formatString: "MMMM DD, YYYY")
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
