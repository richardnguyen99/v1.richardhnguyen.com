/**
 * Index file for <Typography /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import { StyledGradientBlueText, StyledHeroHeadline } from "./style";
import UnderlineText from "./UnderlineText";

const exported = Object.assign("Typography", {
  HeroHeadline: StyledHeroHeadline,
  GradientText: StyledGradientBlueText,
  UnderlineText,
});

export default exported;
