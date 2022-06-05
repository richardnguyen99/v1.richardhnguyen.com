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
    --systemColor-orange: rgb(255, 149, 0);
    --systemColor-yellow: rgb(255, 204, 0);
    --systemColor-green: rgb(52, 199, 89);
    --systemColor-mint: rgb(0, 199, 190);
    --systemColor-teal: rgb(48, 176, 199);
    --systemColor-cyan: rgb(50, 173, 230);
    --systemColor-blue: rgb(0, 122, 255);
    --systemColor-indigo: rgb(88, 86, 214);
    --systemColor-purple: rgb(175, 82, 222);
    --systemColor-pink: rgb(255, 45, 85);
    --systemColor-brown: rgb(162, 132, 94);
  }

  ${Mixins.Normalize};

  a:hover, a:active, a:visited {
    color: inherit;
  }

  body {
    padding: 0;
    margin: 0;
  }

  html {
    line-height: 1.5;
    font-family: "Helvetica Neue","Helvetica","Arial",sans-serif;
  }
`;

export default GlobalStyle;
