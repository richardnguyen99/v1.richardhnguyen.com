/**
 * Mixins is a place where CSS rules are stored and configured, they can be used
 * as CSS along side with other styled components
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import normalizeCSS from "./normalize";
import themeCSS from "./theme";

export default Object.assign("Mixins", {
  Normalize: normalizeCSS,
  Theme: themeCSS,
});
