/**
 * Styling for <Article /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import styled from "styled-components";

import { StyledContent } from "@components/Content/style";
import { Link } from "gatsby";

export const StyledArticleContainer = styled.div`
  padding-right: 40px;
  padding-left: 40px;

  @media (min-width: 768px) {
    margin-bottom: 128px;
    margin-top: 48px;
  }

  @media (min-width: 1024px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const StyledTimelineArticle = styled.article`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  margin-right: -24px;
  margin-left: -24px;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    top: 40px;
    left: 0px;
    border-left: 2px solid var(--systemColor-border);
  }

  &:last-child::before {
    display: none;
  }

  @media (min-width: 768px) {
    &::before {
      top: 72px;
    }
  }
`;

export const StyledTimelineHeader = styled.div`
  padding-right: 24px;
  padding-bottom: 24px;
  width: 100%;
  position: relative;

  @media (min-width: 768px) {
    padding-top: 48px;
    width: ${(5 / 12) * 100}%;
  }
`;
export const StyledTimelineStickyHeader = styled.div`
  top: 96px;
  position: sticky;
  padding-left: 48px;
  padding-top: 32px;

  @media (min-width: 768px) {
    padding-left: 52px;
    padding-top: 0px;
  }

  & > svg {
    left: -10px;
    position: absolute;
    background-color: var(--systemColor-bg);
    color: var(--systemColor-svg);
    display: inline-block;
    overflow: visible;
    fill: currentColor;
  }

  ${StyledTimelineArticle}:last-child &::before {
    content: "";
    position: absolute;
    height: 64px;
    top: -64px;
    left: 0px;
    border-left: 2px solid var(--systemColor-gray-5);
  }
`;
export const StyledTimelineHeaderTitle = styled(Link)`
  font-size: 24px;
  line-height: 24px;
  text-decoration: none;
  font-weight: 800;

  @media (min-width: 480px) {
    font-size: 48px;
    line-height: 26px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const StyledTimelineTime = styled.div`
  margin-top: 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: block;
  color: var(--systemColor-gray-6);
`;

export const StyledTimelineArticleContent = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--systemColor-gray-5);
  margin-left: 48px;
  padding-bottom: 32px;
  padding-top: 0px;

  @media (min-width: 768px) {
    width: ${(7 / 12) * 100}%;
    padding-top: 48px;
    padding-bottom: 48px;
    margin-left: 0;
  }
`;

export const StyledTimelineTags = styled.ul`
  display: inline-block;
  list-style: none;
  margin-top: 8px;
`;

export const StyledTimelineTagWapper = styled.li`
  display: inline-block;
  margin-right: 8px;
  margin-top: 8px;
`;

export const StyledTimeLineTag = styled.a`
  padding: 5px 11px;
  padding-bottom: 7px;
  border-radius: 16px;
  display: inline-block;
  position: relative;

  background: rgba(var(--systemColor-blue-raw), 0.8);
  color: var(--systemColor-gray-1);

  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  text-decoration: none;
  font-feature-settings: "ss02" on, "ss01" on;

  &:hover {
    color: var(--systemColor-gray-3);
    background: rgba(var(--systemColor-blue-raw), 1);
  }
`;

export const StyledArticleContent = styled(StyledContent)`
  color: var(--systemColor-gray-10);
  img {
    width: 100%;
  }
`;

export const StyledArticleSeeMore = styled(Link)`
  display: inline-block;
  color: #4c4c4c;
  font-size: 1em;
  font-weight: 700;
  text-decoration: none;
  position: relative;
  transition: all 0.2s;
  letter-spacing: -0.033em;
  margin-top: 16px;

  &:hover {
    color: #808080;
  }

  .main-text {
    display: flex;
    align-items: center;
    transition: all 0.2s;
  }

  &:hover .main-text {
    transform: translateX(64px);
  }

  .main-text .text {
    margin: 0 16px 0 0;
    line-height: 1;
    background: linear-gradient(
      -70deg,
      var(--systemColor-teal) 0%,
      var(--systemColor-blue) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    box-decoration-break: none;
    -webkit-box-decoration-break: none;
    position: relative;
  }

  &:hover .main-text > .text {
    text-decoration: underline;
    text-decoration-color: currentcolor;
    text-decoration-thickness: auto;
    text-decoration-thickness: 0.1em;
    text-decoration-color: var(--systemColor-cyan);
  }

  .main .arrow {
    position: relative;
  }

  .arrow {
    width: 1px;
    transition: all 0.2s;

    > span {
      background-color: #4c4c4c;
      display: block;
      height: 1px;
      position: relative;
      transition: all 0.2s;
      transition-delay: 0s;
      will-change: transform;
    }

    > span::before,
    > span::after {
      content: "";
      display: block;
      height: 1px;
      position: absolute;
      top: 0;
      right: 0;
      transition: all 0.2s;
      transition-delay: 0;
    }

    > span::before {
      transform-origin: top right;
    }

    > span::after {
      transform-origin: bottom right;
    }
  }

  .arrow.left {
    position: absolute;
    top: 60%;
    left: 0;

    > span {
      width: 0;
      background-color: var(--systemColor-blue);
    }

    > span::before,
    > span::after {
      width: 0;
      background-color: var(--systemColor-blue);
    }

    > span::before {
      transform: rotate(0);
    }

    > span::after {
      transform: rotate(0);
    }
  }

  &:hover > .arrow.left > span {
    width: 48px;
    transition-delay: 0.1s;
    background-color: var(--systemColor-blue);
  }

  &:hover > .arrow.left > span::before,
  &:hover > .arrow.left > span::after {
    width: 8px;
    transition-delay: 0.1s;
    background-color: var(--systemColor-blue);
  }

  &:hover > .arrow.left > span::before {
    transform: rotate(40deg);
  }

  &:hover > .arrow.left > span::after {
    transform: rotate(-40deg);
  }

  .arrow.right {
    top: 3px;

    > span {
      width: 1px;
      transition-delay: 0.2s;
    }

    > span::before,
    > span::after {
      width: 8px;
      background-color: var(--systemColor-cyan);
      transition-delay: 0.3s;
      transition: all 0.5s;
    }

    > span::before {
      transform: rotate(40deg);
    }

    > span::after {
      transform: rotate(-40deg);
    }
  }

  &:hover > .main-text .arrow.right > span {
    width: 0;
    transform: translateX(200%);
    transition-delay: 0;
  }

  &:hover > .main-text .arrow.right > span::before,
  &:hover > .main-text .arrow.right > span::after {
    width: 0;
    transition-delay: 0;
    transition: all 0.1s;
    transform: rotate(0);
  }
`;
