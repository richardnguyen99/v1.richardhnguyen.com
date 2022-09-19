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
  const ref = React.useRef<HTMLDivElement>(null);

  const formatTimeToRead = (num: number) => `${num} min${num > 1 && "s"}`;

  const revealOnScroll = React.useCallback(() => {
    if (ref && ref.current) {
      const winHeight = window.innerHeight;
      const cardPosts = document.querySelectorAll("[data-card-post-order]");
      const elmVisible = 150;
      const postSectionTop = ref.current.getBoundingClientRect().top;

      if (postSectionTop < winHeight - elmVisible) {
        cardPosts.forEach((_c, idx) => {
          setTimeout(() => {
            _c.classList.add("reveal");
          }, idx * 200);
        });
      } else {
        cardPosts.forEach((_c, idx) => {
          _c.classList.remove("reveal");
        });
      }
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", revealOnScroll);

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, [revealOnScroll]);

  return (
    <StyledPostSection ref={ref}>
      <StyledPostGroup>
        <h1>Other posts</h1>
        <StyledPostContainer>
          {data.slice(0, 2).map((post, key) => (
            <StyledCardPostWrapper key={key} data-card-post-order={key + 1}>
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
                  {post.node.frontmatter.description} &mdash;{" "}
                  <span className="read">
                    {formatTimeToRead(post.node.timeToRead)}
                  </span>
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
