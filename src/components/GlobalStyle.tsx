/**
 * Global styling for the project
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { createGlobalStyle } from "styled-components";

import Mixins from "@mixins";

const GlobalStyle = createGlobalStyle`
  :root {
    --systemColor-red: rgb(255, 59, 48);
    --systemColor-yellow: rgb(255, 204, 0);
    --systemColor-orange: rgb(255, 149, 0);
    --systemColor-mint: rgb(0, 199, 190);
    --systemColor-green: rgb(52, 199, 59);
    --systemColor-teal: rgb(48, 176, 199);
    --systemColor-cyan: rgb(50, 173, 230);
    --systemColor-blue: rgb(0, 122, 255);
    --systemColor-indigo: rgb(88, 86, 214);
    --systemColor-purple: rgb(175, 82, 222);
    --systemColor-pink: rgb(255, 45, 85);
    --systemColor-brown: rgb(162, 132, 94);
    --systemColor-gray-1: rgb(142,142, 147);
    --systemColor-gray-2: rgb(174, 174, 178);
    --systemColor-gray-3: rgb(199, 199, 204);
    --systemColor-gray-4: rgb(209, 209, 214);
    --systemColor-gray-5: rgb(229, 229,234);
    --systemColor-gray-6: rgb(242, 242, 247);
    --systemColor-gray-7: rgb(250, 250, 252);

    --systemColor-black: rgb(0,0,0);
    --systemColor-white: rgb(255,255,255);
  }

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
  }

  html {
    line-height: 1.5;
    font-family: "Alliance No.1",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    scroll-behavior: smooth;
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
