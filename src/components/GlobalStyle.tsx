/* eslint-disable indent */
/**
 * Global styling for the project
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { createGlobalStyle } from "styled-components";

import Mixins from "@mixins";

const GlobalStyle = createGlobalStyle`
  :root {
    --systemColor-red-light: 255, 59, 48;
    --systemColor-red-dark: 255, 69, 58;
    --systemColor-yellow-light: 255, 204, 0;
    --systemColor-yellow-dark: 255, 214, 0;
    --systemColor-orange-light:255, 149, 0;
    --systemColor-orange-dark:255, 159, 0;
    --systemColor-mint-light: 0, 199, 190;
    --systemColor-mint-dark: 102, 212, 207;
    --systemColor-green-light: 52, 199, 59;
    --systemColor-green-dark: 50, 215, 75;
    --systemColor-teal-light: 89, 173, 196;
    --systemColor-teal-dark: 106, 196, 220;
    --systemColor-cyan-light: 85, 190, 240;
    --systemColor-cyan-dark: 90, 200, 245;
    --systemColor-blue-light: 0, 122, 255;
    --systemColor-blue-dark: 10, 132, 255;
    --systemColor-indigo-light: 88, 86, 214;
    --systemColor-indigo-dark: 94, 92, 230;
    --systemColor-purple-light: 175, 82, 222;
    --systemColor-purple-dark: 191, 90, 242;
    --systemColor-pink-light: 255, 45, 85;
    --systemColor-pink-dark: 255, 55, 95;
    --systemColor-brown-light: 162, 132, 94;
    --systemColor-brown-dark: 172, 142, 104;

    --systemColor-gray-0: #ffffff;
    --systemColor-gray-1: #f8f9fb;
    --systemColor-gray-2: #f2f4f6;
    --systemColor-gray-3: #e5e5ea;
    --systemColor-gray-4: #d1d1d6;
    --systemColor-gray-5: #c7c7cc;
    --systemColor-gray-6: #aeaeb3;
    --systemColor-gray-7: #94949a;
    --systemColor-gray-8: #7a7a82;
    --systemColor-gray-9: #61616a;
    --systemColor-gray-10: #494951;
    --systemColor-gray-11: #333339;
    --systemColor-gray-12: #1e1e22;
    --systemColor-gray-13: #050506;
    --systemColor-gray-14: #000000;

    --systemColor-black: rgb(0,0,0);
    --systemColor-white: rgb(255,255,255);
  }

  :root[data-theme="dark"] {
    --systemColor-red-raw: var(--systemColor-red-dark);
    --systemColor-yellow-raw: var(--systemColor-yellow-dark);
    --systemColor-orange-raw: var(--systemColor-orange-dark);
    --systemColor-green-raw: var(--systemColor-green-dark);
    --systemColor-mint-raw: var(--systemColor-mint-dark);
    --systemColor-teal-raw: var(--systemColor-teal-dark);
    --systemColor-cyan-raw: var(--systemColor-cyan-dark);
    --systemColor-blue-raw: var(--systemColor-blue-dark);
    --systemColor-indigo-raw: var(--systemColor-indigo-dark);
    --systemColor-purple-raw: var(--systemColor-purple-dark);
    --systemColor-pink-raw: var(--systemColor-pink-dark);
    --systemColor-brown-raw: var(--systemColor-brown-dark);

    --systemColor-red: rgb(var(--systemColor-red-raw));
    --systemColor-yellow: rgb(var(--systemColor-yellow-raw));
    --systemColor-orange: rgb(var(--systemColor-orange-raw));
    --systemColor-green: rgb(var(--systemColor-green-raw));
    --systemColor-mint: rgb(var(--systemColor-mint-raw));
    --systemColor-teal: rgb(var(--systemColor-teal-raw));
    --systemColor-cyan: rgb(var(--systemColor-cyan-raw));
    --systemColor-blue: rgb(var(--systemColor-blue-raw));
    --systemColor-indigo: rgb(var(--systemColor-indigo-raw));
    --systemColor-purple: rgb(var(--systemColor-purple-raw));
    --systemColor-pink: rgb(var(--systemColor-pink-raw));
    --systemColor-brown: rgb(var(--systemColor-brown-raw));
  }

  :root[data-theme="light"] {
    --systemColor-red-raw: var(--systemColor-red-light);
    --systemColor-yellow-raw: var(--systemColor-yellow-light);
    --systemColor-orange-raw: var(--systemColor-orange-light);
    --systemColor-green-raw: var(--systemColor-green-light);
    --systemColor-mint-raw: var(--systemColor-mint-light);
    --systemColor-teal-raw: var(--systemColor-teal-light);
    --systemColor-cyan-raw: var(--systemColor-cyan-light);
    --systemColor-blue-raw: var(--systemColor-blue-light);
    --systemColor-indigo-raw: var(--systemColor-indigo-light);
    --systemColor-purple-raw: var(--systemColor-purple-light);
    --systemColor-pink-raw: var(--systemColor-pink-light);
    --systemColor-brown-raw: var(--systemColor-brown-light);

    --systemColor-red: rgb(var(--systemColor-red-raw));
    --systemColor-yellow: rgb(var(--systemColor-yellow-raw));
    --systemColor-orange: rgb(var(--systemColor-orange-raw));
    --systemColor-green: rgb(var(--systemColor-green-raw));
    --systemColor-mint: rgb(var(--systemColor-mint-raw));
    --systemColor-teal: rgb(var(--systemColor-teal-raw));
    --systemColor-cyan: rgb(var(--systemColor-cyan-raw));
    --systemColor-blue: rgb(var(--systemColor-blue-raw));
    --systemColor-indigo: rgb(var(--systemColor-indigo-raw));
    --systemColor-purple: rgb(var(--systemColor-purple-raw));
    --systemColor-pink: rgb(var(--systemColor-pink-raw));
    --systemColor-brown: rgb(var(--systemColor-brown-raw));
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
