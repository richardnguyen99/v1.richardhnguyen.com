/**
 * Styling for MDX content
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
    color: var(--systemColor-gray-1);
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
`;

export const StyledDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-top: 0;
  margin-bottom: 10px;
  font-style: italic;
  color: var(--systemColor-gray-2);
  width: ${(9 / 12) * 100}%;
`;

export const StyledContent = styled.main`
  display: block;
  width: 100%;

  @media (min-width: 768px) {
    width: ${(8 / 12) * 100}%;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: -0.01em;
  }

  @media (min-width: 980px) {
    width: ${(12 / 12) * 100}%;
  }

  a {
    color: var(--systemColor-green);
    text-decoration: none;

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
    font-family: Inconsolata, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
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
    font-family: Inconsolata, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    font-weight: 600;
    border-radius: 6px;
    padding: 4px 6px;
    background: #eff2ff;
  }

  code {
    font-family: Inconsolata, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    font-weight: 600;
    border-radius: 6px;
    padding: 4px 6px;
    background: #eff2ff;
  }
`;
