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
} from "./style";

type FeaturedDataProps = Queries.ArticlePageQuery;

const Featured: React.FC<FeaturedDataProps> = ({ allMdx }) => {
  const { node: mdxNode } = allMdx.edges[0];

  const [transform, setTransform] = React.useState({
    image: 0,
    content: 0,
  });

  const parallaxScrolling = React.useCallback(() => {
    if (typeof window !== "undefined") {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      const topDist = top - document.documentElement.clientTop;

      const imageTransform = topDist ? topDist * 0.5 : 0;
      const contentTransform = topDist ? topDist * 0.13 : 0;

      setTransform({
        image: imageTransform > 300 ? 300 : imageTransform,
        content: contentTransform > 50 ? 50 : contentTransform,
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
    <StyledCardFeaturedSection>
      <StyledCardFeaturedImage
        style={{
          backfaceVisibility: "hidden",
          transform: `translateY(${transform.image}px)`,
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
        style={
          {
            backfaceVisibility: "hidden",
            transform: `translateY(${transform.content}px)`,
            "--featured-scroll-value": `${transform.content}px`,
            // This explicit type-cast is to bypass Typescript checking so that
            // I can add a custom variable with `style` props.
          } as React.CSSProperties
        }
      >
        <div className="wrapper">
          <p className="wrapper__date">{mdxNode.frontmatter.created}</p>
          <h2 className="wrapper__heading">
            <Link to={mdxNode.slug}>{mdxNode.frontmatter.title}</Link>
          </h2>
          <p className="wrapper__description">
            {mdxNode.frontmatter.description}
          </p>
        </div>
      </StyledCardFeaturedContent>
    </StyledCardFeaturedSection>
  );
};

export default Featured;
