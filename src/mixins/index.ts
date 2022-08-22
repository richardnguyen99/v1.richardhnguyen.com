/**
 * Index file from mixins
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import SystemColor from "./color";
import NormalizeCSS from "./normalize";
import SpacingCSS from "./spacing";
import RootVariables from "./root";

const exported = Object.assign("Mixins", {
  Root: RootVariables,
  Normalize: NormalizeCSS,
  SystemColor: SystemColor,
  Spacing: SpacingCSS,
});

export default exported;
