/* eslint-disable indent */
/**
 * Styling for MDX contents.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import styled from "styled-components";

export const StyledSectionHeader = styled.section`
  padding-top: 65px;
  padding-bottom: 40px;
  display: block;

  @media (min-width: 980px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

export const StyledHeader = styled.h1`
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 28px;
  line-height: 32px;
  font-weight: 800px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 40px;
    line-height: 44px;
  }

  @media (min-width: 980px) {
    font-size: 48px;
    line-height: 52px;
    letter-spacing: -0.03em;
  }
`;

export const StyledFrontMatter = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-weight: bold;

  & > p {
    color: var(
      ${(props) => `--systemColor-gray-${props.theme.mode === "dark" ? 5 : 8}`}
    );
    line-height: 20px;
    font-size: 14px;

    &.dot {
      display: inline-block;
      padding: 0 8px;
    }
  }
`;

export const StyledThumbnail = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: 3rem;
  max-width: 980px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 1.5rem;

  & > .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
    object-fit: cover;
    left: 0;
    top: 0;
    position: relative;

    border-radius: 6px;
    border-style: none;
  }

  & > hr {
    opacity: 1;
    background: linear-gradient(
      -70deg,
      rgb(4, 160, 82) 0%,
      var(--systemColor-green) 100%
    );
    height: 5px;
    border: none;
    border-radius: 8px;
    margin-top: 3rem;
  }
`;

export const StyledDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-top: 0;
  margin-bottom: 10px;
  font-style: italic;
  color: var(
    ${(props) => `--systemColor-gray-${props.theme.mode === "dark" ? 7 : 7}`}
  );
  width: ${(9 / 12) * 100}%;
`;

export const StyledContentGrid = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  align-items: flex-start;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
`;

export const StyledChapterNav = styled.nav`
  padding-left: 2rem;
  display: block;

  & > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & > h5 {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }
`;

export const StyledChapterItem = styled.li`
  font-weight: 400;
  font-size: 14px;
  color: var(
    ${(props) => `--systemColor-gray-${props.theme.mode === "dark" ? 9 : 7}`}
  );
  position: relative;
  list-style: none;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-left: -1.5rem;
  padding-left: 2.5rem;
  border-left: 1px solid
    var(
      ${(props) => `--systemColor-gray-${props.theme.mode === "dark" ? 9 : 7}`}
    );
  transition: border 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:link,
  &:visited {
    color: var(
      ${(props) => `--systemColor-gray-${props.theme.mode === "dark" ? 4 : 8}`}
    );
  }

  &.sub {
    padding-left: 3.5rem;
  }

  &:hover {
    color: var(
      ${(props) => `--systemColor-gray-${props.theme.mode === "dark" ? 7 : 5}`}
    );
    border-left: 1px solid
      var(
        ${(props) =>
          `--systemColor-gray-${props.theme.mode === "dark" ? 7 : 5}`}
      );
  }

  & > a {
    text-decoration: none;
  }

  &:hover > a {
    text-decoration: underline;
  }

  &:first-of-type {
    padding-top: 1.5rem;
  }

  &:last-of-type {
    padding-bottom: 0;
  }

  &.active {
    color: var(--systemColor-green);
    border-left: 1px solid var(--systemColor-green);
  }
`;

export const StyledChapterIcon = styled.span`
  margin-left: -37px;
  margin-right: 7px;
  vertical-align: middle;
`;

export const StyledStickySideContent = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  width: 230px;
  display: none;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 1280px) {
    display: flex;
    position: sticky;
    z-index: auto;
    top: 66px;
    height: auto;
    width: 230px;
    transform: none;
    opacity: 1;
    overflow-y: hidden;
  }
`;

export const StyledContent = styled.main`
  display: block;
  width: 100%;

  font-size: 16px;
  line-height: 30px;
  letter-spacing: -0.016em;

  @media (min-width: 1280px) {
    font-size: 18px;
    letter-spacing: -0.01em;
  }

  a {
    color: var(--systemColor-green);
    text-decoration: none;

    &:hover,
    &:visited,
    &:active {
      color: var(--systemColor-green);
    }

    &:hover {
      text-decoration: underline;
    }
  }

  & > ol,
  & > ul {
    padding-left: 24px;
    margin-bottom: 1.5em;
  }

  & > h1 {
    margin-top: 3rem;
    letter-spacing: 0;
    line-height: 28px;
  }

  & > h2 {
    margin-top: 2.5rem;
    line-height: 24px;
    letter-spacing: 0;
  }
  & > h3 {
    margin-top: 2rem;
    line-height: 20px;
    letter-spacing: 0;
  }

  & > pre {
    width: 100%;
    background: #eff2ff;
    padding: 16px 24px;
    border-radius: 4px;
    font-family: Inconsolata, SF Mono, Menlo, Consolas, Liberation Mono,
      monospace;
    min-width: 100px;
    max-width: 100%;
    margin: 28px 0;
    overflow: hidden;
    hyphens: none;
    word-break: normal;
    tab-size: 2;
  }

  & > pre code {
    padding: 0;
    display: block;
    overflow-x: auto;
    font-family: Inconsolata, SF Mono, Menlo, Consolas, Liberation Mono,
      monospace;
    font-weight: 600;
    border-radius: 6px;
    padding: 4px 6px;
    background: #eff2ff;
  }

  code {
    font-family: Inconsolata, SF Mono, Menlo, Consolas, Liberation Mono,
      monospace;
    font-weight: 600;
    border-radius: 6px;
    padding: 4px 6px;
    margin-left: 4px;
    margin-right: 4px;
    background: var(
      ${(props) => `--systemColor-gray-${props.theme.mode === "dark" ? 10 : 3}`}
    );
    color: var(
      ${(props) => `--systemColor-gray-${props.theme.mode === "dark" ? 2 : 13}`}
    );
  }

  a > code {
    color: var(--systemColor-green);
    border: 1px solid var(--systemColor-green);
    background: rgba(var(--systemColor-teal-raw), 0.2);
  }

  blockquote {
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 5px;
      top: 0;
      left: -1rem;
      border-radius: 3px;
      background: ${(props) =>
        props.theme.mode === "dark" ? "rgb(49, 49, 49)" : "rgb(229, 229, 234)"};
    }

    margin-left: 0;
    margin-right: 0;
    padding: 1.5rem;
    border-radius: 6px;
    font-style: italic;
    position: relative;

    background: ${(props) =>
      props.theme.mode === "dark" ? "rgb(30, 30, 30)" : "rgb(229, 229, 234)"};
    color: var(
      ${(props) => `--systemColor-gray-${props.theme.mode === "dark" ? 1 : 13}`}
    );

    & > p {
      padding: 0;
      margin: 0;
      padding-bottom: 1rem;
    }

    code {
      color: var(--systemColor-green);
      background: var(--systemColor-gray-3);
    }
  }

  figure:not(.gatsby-resp-image-figure) {
    margin: 0;
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-align: center;
    background: ${(props) =>
      props.theme.mode === "dark" ? "rgb(30, 30, 30)" : "rgb(229, 229, 234)"};
    color: var(--systemColor-gray-7);
    border-radius: 16px;

    & > figcaption {
      font-size: 16px;
      font-weight: 500;
    }
  }

  figure > figcaption {
    font-size: 14px;

    &.gatsby-resp-image-figcaption {
      margin-top: 1rem;
    }
  }

  ul,
  ol {
    padding-left: 3rem;
    margin-top: 2rem;
    margin-bottom: 2rem;

    & > li {
      padding-bottom: 1rem;
    }
  }
`;

export const StyledChapterActiveLine = styled.div<{
  display: boolean;
  start: number;
  end: number;
}>`
  &::before {
    content: "";
    position: absolute;
    width: 5px;
    height: ${(props) => props.end - props.start + 2}px;
    top: ${(props) => props.start}px;
    background: var(--systemColor-green);
    left: 6px;
    z-index: 100;
    overflow-y: hidden;

    transition: all 200ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
`;

export const StyledLabels = styled.ul`
  list-style: none;
  margin-top: 8px;
  padding-left: 0;
  margin-bottom: 0;
  width: auto;
  position: relative;
  display: inline-block;
`;

export const StyledLabel = styled.li`
  margin-right: 8px;
  margin-top: 8px;
  padding: 5px 11px;
  padding-bottom: 7px;
  border-radius: 16px;
  border: 1px solid transparent;

  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;

  color: var(--systemColor-green);
  background: transparent;
  font-size: 14px;
  font-weight: 600;
  clip-path: fill-box;
  background-color: rgba(var(--systemColor-green-raw), 0.2);
  border-color: var(--systemColor-green);

  &:hover {
    color: var(
      ${(props) => `--systemColor-gray-${props.theme.mode === "dark" ? 13 : 2}`}
    );
    text-decoration: underline;
    cursor: pointer;
    background-color: rgba(var(--systemColor-green-raw), 1);
  }
`;

export const StyledDots = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 96px;
  opacity: 0.2;
  font-size: sans-serif;
  padding-bottom: 100px;
  line-height: 0;
  letter-spacing: 32px;
`;
