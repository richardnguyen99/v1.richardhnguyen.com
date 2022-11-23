/**
 * GLobalStyle is a styled-components element that configures and normalizes
 * all the default styles.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { createGlobalStyle } from "styled-components";

import mixins from "@mixins";

const GlobalStyle = createGlobalStyle`
  ${mixins.Theme}
  ${mixins.Normalize}
  ${mixins.Animation}

  #tooltip {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
  }
`;

export default GlobalStyle;
