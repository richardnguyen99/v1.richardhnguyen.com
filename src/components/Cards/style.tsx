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

export const StyledCardFeaturedTitle = styled.h1`
  font-size: 3em;
  letter-spacing: -0.018em;
  position: relative;
  display: inline-flex;
  opacity: calc(var(--featuredTitle-scroll-value) / 25 - 0.25);

  &::before {
    content: "";
    position: absolute;
    height: 2px;
    width: calc(-50px + var(--featuredTitle-scroll-value) * 4px);
    background: var(--systemColor-border);
    top: 50%;
    bottom: 0;
    right: 105%;
  }
`;

export const StyledCardFeaturedImage = styled.div`
  width: 980px;
  margin-left: 160px;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  border-radius: 12px;
  box-shadow: 0 0 0 1px rgba(53, 72, 91, 0.14),
    0 2.75px 2.21px rgba(0, 0, 0, 0.07), 0 6.65px 5.32px rgba(0, 0, 0, 0.043),
    0 12.5px 10px rgba(0, 0, 0, 0.03), 0 22px 18px rgba(0, 0, 0, 0.03),
    0 42px 33.4px rgba(0, 0, 0, 0.02), 0 100px 80px rgba(0, 0, 0, 0.017) !important;

  & > img,
  & > .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
`;

export const StyledCardFeaturedContent = styled.div`
  position: relative;
  margin-top: -225px;
  max-width: 680px;
  align-self: flex-start;
  z-index: 1;

  .wrapper {
    letter-spacing: -1px;
    line-height: 125%;
    font-size: 24px;
    padding: 75px;
    width: 680px;
    color: var(--systemColor-cards__featured-text);
    background: var(--systemColor-cards__featured-bg);
    border: 2px solid var(--systemColor-green);
    border-radius: 12px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.03), 0 4px 4px rgba(0, 0, 0, 0.04),
      0 10px 8px rgba(0, 0, 0, 0.05), 0 15px 15px rgba(0, 0, 0, 0.06),
      0 30px 30px rgba(0, 0, 0, 0.07), 0 70px 65px rgba(0, 0, 0, 0.09) !important;
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
      color: inherit;
      text-decoration: none;
    }
  }

  .wrapper__description {
    margin: 5px 0;
    font-weight: 500;
    font-weight: 22px;
  }

  .glow {
    position: absolute;
    z-index: -62;
    top: 55%;
    bottom: auto;
    left: -35%;
    width: 125%;
    height: 75vh;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    opacity: calc(var(--featured-scroll-value) / 50);
  }
`;
