/**
 * A React component to display posts of the same in the section.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import {
  StyledCardPostWrapper,
  StyledCardPost,
  StyledPostContainer,
  StyledPostGroup,
  StyledPostSection,
} from "./style";

type PostsProps = {
  data: Queries.ArticlePageQuery["allMdx"]["edges"];
  glow: Queries.ArticlePageQuery["file"];
};

const Posts: React.FC<PostsProps> = ({ data }) => {
  return (
    <StyledPostSection>
      <StyledPostGroup>
        <h1>Other posts</h1>
        <StyledPostContainer>
          {data.slice(0, 2).map((post, key) => (
            <StyledCardPostWrapper key={key}>
              <StyledCardPost>
                <Link className="image" to={post.node.slug}>
                  <GatsbyImage
                    alt={post.node.frontmatter.featuredImageAlt}
                    image={
                      post.node.frontmatter.featuredImage.childImageSharp
                        .gatsbyImageData
                    }
                  />
                </Link>
                <p className="date">{post.node.frontmatter.created}</p>
                <h3 className="heading">
                  <Link to={post.node.slug}>{post.node.frontmatter.title}</Link>
                </h3>
                <p className="description">
                  {post.node.frontmatter.description}
                </p>
              </StyledCardPost>
            </StyledCardPostWrapper>
          ))}
        </StyledPostContainer>
      </StyledPostGroup>
    </StyledPostSection>
  );
};

export default Posts;
