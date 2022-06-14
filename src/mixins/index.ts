/**
 * Index file from mixins
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import SystemColor from "./color";
import NormalizeCSS from "./normalize";
import SpacingCSS from "./spacing";

const exported = Object.assign("Mixins", {
  Normalize: NormalizeCSS,
  SystemColor: SystemColor,
  Spacing: SpacingCSS,
});

export default exported;
