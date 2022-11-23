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
`;

export default GlobalStyle;
