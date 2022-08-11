/**
 * A React component for displaying chapters on the side of MDX content.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";

import {
  StyledChapterIcon,
  StyledChapterItem,
  StyledChapterNav,
} from "./style";
import { ChapterProps } from "./type";
import SVG from "@components/Svg";

const Chapter: React.FC<ChapterProps> = ({ name, currentChapter, ...rest }) => {
  const chaptersInfo = useStaticQuery<Queries.ChapterQueryQuery>(graphql`
    query ChapterQuery {
      allMdx {
        edges {
          node {
            frontmatter {
              series
              chapter
              part
              series
              title
            }
            slug
          }
        }
      }
    }
  `);

  const relatedChapters = chaptersInfo.allMdx.edges
    .filter((edge) => edge.node.frontmatter.series === name)
    .sort((e1, e2) => e1.node.frontmatter.part - e2.node.frontmatter.part);

  return (
    <StyledChapterNav {...rest}>
      <h5>
        <StyledChapterIcon>
          <SVG.Path />
        </StyledChapterIcon>
        {name}
      </h5>

      {relatedChapters.map((chapter, i) => (
        <StyledChapterItem
          key={i}
          className={
            currentChapter === chapter.node.frontmatter.part ? "active" : ""
          }
        >
          <Link to={`/articles/${chapter.node.slug}`}>
            {chapter.node.frontmatter.title}
          </Link>
        </StyledChapterItem>
      ))}
    </StyledChapterNav>
  );
};

export default Chapter;
