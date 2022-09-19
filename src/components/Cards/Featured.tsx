/**
 * A React component to display a featured post or article, usually used for the most recent article or the most visited post depending on the intent.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import {
  StyledCardFeaturedContent,
  StyledCardFeaturedImage,
  StyledCardFeaturedSection,
  StyledCardFeaturedTitle,
} from "./style";
import Content from "@components/Content";

type FeaturedDataProps = {
  data: Queries.ArticlePageQuery;
};

const Featured: React.FC<FeaturedDataProps> = ({ data }) => {
  const { node: mdxNode } = data.allMdx.edges[0];

  const [transform, setTransform] = React.useState({
    image: 0,
    content: 0,
    title: 0,
  });

  const parallaxScrolling = React.useCallback(() => {
    if (typeof window !== "undefined") {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      const topDist = top - document.documentElement.clientTop;

      const imageTransform = topDist > 0 ? topDist * 0.5 : 0;
      const contentTransform = topDist > 0 ? topDist * 0.13 : 0;
      const titleTransform = contentTransform;

      setTransform({
        image: imageTransform > 300 ? 300 : imageTransform,
        content: contentTransform,
        title: titleTransform > 100 ? 100 : titleTransform,
      });
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("scroll", parallaxScrolling);

    return () => {
      document.removeEventListener("scroll", parallaxScrolling);
    };
  }, [parallaxScrolling]);

  return (
    <StyledCardFeaturedSection
      style={
        {
          "--featured-scroll-value": `${transform.content}`,
          // This explicit type-cast is to bypass Typescript checking so that
          // I can add a custom variable with `style` props.
        } as React.CSSProperties
      }
    >
      <StyledCardFeaturedTitle
        style={
          {
            transform: `translateY(${50 + transform.title / 10}px)`,
            "--featuredTitle-scroll-value": `${transform.title}`,
          } as React.CSSProperties
        }
      >
        Most recent
      </StyledCardFeaturedTitle>
      <StyledCardFeaturedImage
        style={{
          backfaceVisibility: "hidden",
          transform: `translateY(${transform.image}px)`,
          opacity: `${1 - transform.image / 600}`,
        }}
      >
        <GatsbyImage
          alt={mdxNode.frontmatter.featuredImageAlt}
          image={
            mdxNode.frontmatter.featuredImage.childImageSharp.gatsbyImageData
          }
        />
      </StyledCardFeaturedImage>
      <StyledCardFeaturedContent
        className={
          transform.content >= 50 && transform.content < 190 ? "slide-in" : ""
        }
        style={{
          backfaceVisibility: "hidden",
        }}
      >
        <div className="wrapper">
          <p className="wrapper__date">{mdxNode.frontmatter.created}</p>
          <h2 className="wrapper__heading">
            <Link to={mdxNode.slug}>{mdxNode.frontmatter.title}</Link>
          </h2>
          <p className="wrapper__description">
            {mdxNode.frontmatter.description}
          </p>
          <Content.LabelContainer>
            <Content.Label>C++</Content.Label>
            <Content.Label>Gatsby</Content.Label>
          </Content.LabelContainer>
        </div>
        <img alt={data.file.name} src={data.file.publicURL} className="glow" />
      </StyledCardFeaturedContent>
    </StyledCardFeaturedSection>
  );
};

export default Featured;
