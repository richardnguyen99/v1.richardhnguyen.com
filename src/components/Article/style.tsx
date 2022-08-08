/**
 * Styling for <Article /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import styled from "styled-components";

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
    border-left: 2px solid var(--systemColor-gray-2);
  }

  &:last-child::before {
    display: none;
  }

  @media (min-width: 768px) {
    &:before {
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
  top: 72px;
  position: sticky;
  padding-left: 48px;

  @media (min-width: 768px) {
    padding-left: 52px;
  }

  & > svg {
    left: -10px;
    position: absolute;
    background-color: var(--systemColor-gray-7);
    color: var(--systemColor-gray-2);
    display: inline-block;
    overflow: visible;
    fill: currentColor;
  }

  &.sticky-header::before {
    content: "";
    position: absolute;
    height: 64px;
    top: -64px;
    left: 0px;
    border-left: 2px solid var(--systemColor-gray-2);
  }
`;
export const StyledTimelineHeaderTitle = styled.h2`
  font-size: 24px;
  line-height: 24px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
    font-weight: 800;
  }
`;

export const StyledTimelineTime = styled.div`
  margin-top: 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: block;
  color: var(--systemColor-gray2);
`;

export const StyledTimelineArticleContent = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--systemColor-gray-1);
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
