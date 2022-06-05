/**
 * Global styling for the project
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { createGlobalStyle } from "styled-components";

import Mixins from "@mixins";

const GlobalStyle = createGlobalStyle`
  ${Mixins.Normalize};

  body {
    padding: 0;
    margin: 0;
  }

  html {
    line-height: 1.5;
  }
`;

export default GlobalStyle;
