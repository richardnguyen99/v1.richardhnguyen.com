/* eslint-disable react/no-unescaped-entities */
/**
 * A React component to display Articles page (/articles)
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "@components/Layout";
import Typography from "@components/Typography";
import Utility from "@components/Utility";
import Card from "@components/Cards";

type ArticlePageData = Queries.ArticlePageQuery;

const ArticlePage = ({ data }: PageProps<ArticlePageData>) => {
  return (
    <Layout.Page title="Articles" hideNavbar>
      <Utility.Container style={{ maxWidth: "1280px" }}>
        <Typography.HeroHeadline style={{ fontSize: "9.5rem" }}>
          <Typography.Gradient color="green">Articles</Typography.Gradient> from{" "}
          <Typography.UnderlineText color="green">
            Richard
          </Typography.UnderlineText>
        </Typography.HeroHeadline>
      </Utility.Container>
      <section id="landing-section">
        <Utility.Wrapper>
          <Card.Featured data={data} />
        </Utility.Wrapper>
      </section>
    </Layout.Page>
  );
};

export const query = graphql`
  query ArticlePage {
    file(name: { eq: "codespaces-glow" }) {
      id
      name
      publicURL
    }
    allMdx(sort: { fields: frontmatter___created, order: DESC }, limit: 1) {
      edges {
        node {
          slug
          frontmatter {
            articleUrl
            chapter
            chapterName
            created(formatString: "MMM DD, YYYY")
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, quality: 100)
              }
            }
            featuredImageAlt
            title
            tags
            description
          }
          timeToRead
        }
      }
    }
  }
`;

export default ArticlePage;
