/**
 * Styling for <Card /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import styled from "styled-components";

export const StyledCardFeaturedSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 64px;
  margin-bottom: 48px;

  @media screen and (min-width: 600px) {
    margin-top: calc(100vw / 9);
    margin-bottom: calc(25vw / 3);
  }

  @media screen and (min-width: 1440px) {
    margin-top: 160px;
    margin-bottom: 120px;
  }
`;

export const StyledCardFeaturedImage = styled.div`
  width: 980px;
  margin-left: 160px;
  height: 100%;
  overflow: hidden;

  & > img,
  & > .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
`;

export const StyledCardFeaturedContent = styled.div`
  &::after {
    content: "";
    position: absolute;
    width: 1em;
    height: 1em;
    z-index: -1;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0.2;
    box-shadow: 0 20px var(--featured-scroll-value) 2px var(--systemColor-green);
  }

  position: relative;
  margin-top: -225px;
  overflow: hidden;
  max-width: 680px;
  align-self: flex-start;
  background: var(--systemColor-green);
  border-radius: 12px;

  .wrapper {
    letter-spacing: -1px;
    line-height: 125%;
    font-size: 24px;
    margin: 75px;
    width: 460px;
    color: white;
  }

  .wrapper__date {
    margin: 5px 0;
    font-weight: 600;
  }

  .wrapper__heading {
    margin: 5px 0 15px 0;
    font-size: 48px;
    font-weight: 600;
    line-height: 108%;

    > a {
      color: white;
      text-decoration: none;
    }
  }

  .wrapper__description {
    margin: 5px 0;
    font-weight: 500;
    font-weight: 22px;
  }
`;
