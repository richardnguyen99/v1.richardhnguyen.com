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
              chapterName
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
    .sort(
      (e1, e2) => e1.node.frontmatter.chapter - e2.node.frontmatter.chapter
    );

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
            currentChapter === chapter.node.frontmatter.chapter ? "active" : ""
          }
        >
          <Link to={`/articles/${chapter.node.slug}`}>
            {chapter.node.frontmatter.chapter}.&nbsp;
            {chapter.node.frontmatter.chapterName}
          </Link>
        </StyledChapterItem>
      ))}
    </StyledChapterNav>
  );
};

export default Chapter;
