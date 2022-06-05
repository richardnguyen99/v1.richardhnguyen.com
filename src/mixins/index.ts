/**
 * Index file from mixins
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import SystemColor from "./color";
import NormalizeCSS from "./normalize";

const exported = Object.assign("Mixins", {
  Normalize: NormalizeCSS,
  SystemColor: SystemColor,
});

export default exported;
