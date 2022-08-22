/* eslint-disable indent */
/**
 * Global styling for the project
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { createGlobalStyle } from "styled-components";

import Mixins from "@mixins";

const GlobalStyle = createGlobalStyle`
  ${Mixins.Root};
  ${Mixins.Normalize};
  ${Mixins.SystemColor};
  ${Mixins.Spacing};

  a:hover, a:active, a:visited {
    color: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: "Alliance No.1",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    background: var(--systemColor-bg);
    color: var(--systemColor-text);

    transition: background 200ms cubic-bezier(0.075, 0.82, 0.165, 1), color 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  html {
    line-height: 1.5;
    font-family: "Alliance No.1",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    scroll-behavior: smooth;
  }


  h1, h2, h3, h4, h5, h6 {
    color: var(--systemColor-title);
  }

  .anchor.before {
    transform: translateX(-100%) translateY(50%);
    padding-right: 1rem;

    & > svg {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .bold {
    font-weight: bold;
  }

  hr {
    opacity: 0.16;
  }

  #readme {
    p {
      font-family: Georgia, ui-serif, serif;
      font-size: 20px;
      line-height: 1.2em;
      text-transform: none;
    }
  }

  #hey-image {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    margin-top: 32px;
    margin-bottom: 32px;

    h1 {
      margin-top: 0;
      margin-bottom: 0.5rem;
      font-size: 64px;
      font-family: Georgia, ui-serif, serif;
      font-weight: 900;
      letter-spacing: -0.055em;
    }

    p {
      font-weight: 500;
      padding: 0;
      margin: 0;
    }
  }
`;

export default GlobalStyle;
