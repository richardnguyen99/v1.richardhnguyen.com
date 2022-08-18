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
                  boxShadow: "0 22px 70px 4px rgba(0, 0, 0, 0.56)",
                }}
              />
            </Content.Thumbnail>
          )}
        </Article.Content>
      </Article.Timeline>
    );
  };

  return (
    <Layout.Page className="bg-gray-3" title="Home">
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

        <h1>The standard Lorem Ipsum passage, used since the 1500s</h1>

        <p>
          "But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure?"
        </p>
        <h1>
          Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero
          in 45 BC
        </h1>

        <p>
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat."
        </p>
        <h1>1914 translation by H. Rackham</h1>

        <p>
          "On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will, which is the same as
          saying through shrinking from toil and pain. These cases are perfectly
          simple and easy to distinguish. In a free hour, when our power of
          choice is untrammelled and when nothing prevents our being able to do
          what we like best, every pleasure is to be welcomed and every pain
          avoided. But in certain circumstances and owing to the claims of duty
          or the obligations of business it will frequently occur that pleasures
          have to be repudiated and annoyances accepted. The wise man therefore
          always holds in these matters to this principle of selection: he
          rejects pleasures to secure other greater pleasures, or else he
          endures pains to avoid worse pains."
        </p>
      </Utility.Container>
    </Layout.Page>
  );
};

export const query = graphql`
  query IndexPage {
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
