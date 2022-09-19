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
  transform: translateY(
    calc(50px + (var(--featuredTitle-scroll-value) * 1px / 10))
  );

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
  backface-visibility: hidden;

  transform: translateY(calc(var(--featuredImage-scroll-value) * 1px));
  opacity: calc(1 - var(--featuredImage-scroll-value) / 600);

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
  backface-visibility: hidden;

  opacity: 0;
  transform: translateX(-24px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);

  &.slide-in {
    opacity: 1;
    transform: scale(1) translateX(0px);
  }

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

export const StyledPostSection = styled.section`
  padding-right: 1.5rem;
  padding-left: 1.5rem;
`;

export const StyledPostGroup = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const StyledPostContainer = styled.div`
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  -webkit-box-pack: center;
  justify-content: center;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
`;

export const StyledCardPostWrapper = styled.div`
  max-width: 500px;
  width: 500px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  letter-spacing: -0.8px;
`;

export const StyledCardPost = styled.div`
  position: relative;
  border-radius: 12px;

  > a {
    text-decoration: none;
  }

  .image {
    display: block;
    object-fit: cover;
    overflow: hidden;
    position: relative;
    width: 498px;
    height: 260px;
    border-radius: 12px;
    margin-bottom: 2.5rem;
  }

  .image:hover {
    border: 1px solid var(--systemColor-green);
    box-shadow: 0 0 65px rgba(50, 215, 75, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.1), 0 2px 2px rgba(0, 0, 0, 0.03),
      0 4px 4px rgba(0, 0, 0, 0.04), 0 10px 8px rgba(0, 0, 0, 0.05),
      0 15px 15px rgba(0, 0, 0, 0.06), 0 30px 30px rgba(0, 0, 0, 0.07),
      0 70px 65px rgba(0, 0, 0, 0.09);
  }

  .image img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    transition: transform 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      transform: scale(1.1) translate3d(0, 0, 0);
    }
  }

  .glow {
    position: absolute;
    z-index: -62;
    top: 30%;
    bottom: auto;
    left: -35%;
    width: 125%;
    height: 45vh;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &:hover .glow {
    opacity: 1;
  }

  .date {
    margin-top: 16px;
    margin-bottom: 4px;
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
  }

  .heading {
    margin: 0;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 32px;
    letter-spacing: -1px;
    line-height: 111%;

    & > a {
      text-decoration: none;
    }
  }

  .description {
    font-size: 18px;
    line-height: 125%;
    margin-bottom: 8px;
  }
`;
