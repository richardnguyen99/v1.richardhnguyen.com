/* eslint-disable react/no-unescaped-entities */
/**
 * A React component to display the index page (/)
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "@components/Layout";
import Typography from "@components/Typography";
import Select from "@components/Select";
import Utility from "@components/Utility";
import Article from "@components/Article";
import Content from "@components/Content";

type IndexPageData = Queries.IndexPageQuery;

const IndexPage: React.FC = ({ data }: PageProps<IndexPageData>) => {
  const mdxNodes = data.allMdx.edges;

  const renderNode = (mdxNode: typeof mdxNodes[0], _key: number) => {
    const {
      created,
      description,
      previewFeaturedImage,
      featuredImageAlt,
      title,
      tags,
      articleUrl,
    } = mdxNode.node.frontmatter;

    return (
      <Article.Timeline
        key={_key}
        title={title}
        time={created}
        tags={tags}
        articleUrl={articleUrl}
      >
        <Article.Content>
          {description}
          {previewFeaturedImage && (
            <Content.Thumbnail
              style={{
                padding: 0,
                paddingTop: "3rem",
              }}
            >
              <GatsbyImage
                alt={featuredImageAlt}
                image={previewFeaturedImage.childImageSharp.gatsbyImageData}
                style={{
                  width: "100%",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              />
              <img
                alt={data.file.name}
                src={data.file.publicURL}
                style={{
                  top: "50%",
                  position: "absolute",
                  zIndex: -1,
                  transform: "translateY(-50%)",
                  width: "110%",
                  margin: "0px -3.35%",
                }}
              />
            </Content.Thumbnail>
          )}
        </Article.Content>
      </Article.Timeline>
    );
  };

  return (
    <Layout.Page title="Home">
      <Utility.Container>
        <Typography.HeroHeadline>
          The{" "}
          <Typography.UnderlineText color="blue">
            latest
          </Typography.UnderlineText>{" "}
          from <Typography.Gradient>Richard H. Nguyen</Typography.Gradient>
        </Typography.HeroHeadline>
      </Utility.Container>

      <div className="py-4 border-bottom">
        <Utility.Container>
          <Select>
            <option>All categories</option>
          </Select>
        </Utility.Container>
      </div>

      <Utility.Container>
        <Article.Container>
          {mdxNodes && mdxNodes.map((mdxNode, idx) => renderNode(mdxNode, idx))}
        </Article.Container>
      </Utility.Container>
    </Layout.Page>
  );
};

export const query = graphql`
  query IndexPage {
    file(name: { eq: "repo-editor-glow" }) {
      id
      name
      publicURL
    }
    allMdx(sort: { fields: frontmatter___created, order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 200, truncate: true)
          frontmatter {
            description
            created(formatString: "MMMM Do, YYYY")
            update
            title
            tags
            articleUrl
            featuredImageAlt
            previewFeaturedImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, quality: 100)
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
