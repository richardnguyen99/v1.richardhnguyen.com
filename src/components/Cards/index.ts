/**
 * Index file for <Card /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import {
  StyledCardFeaturedContent,
  StyledCardFeaturedImage,
  StyledCardFeaturedSection,
} from "./style";

import Featured from "./Featured";

const exported = Object.assign("Card", {
  FeaturedSection: StyledCardFeaturedSection,
  FeaturedImage: StyledCardFeaturedImage,
  FeaturedContent: StyledCardFeaturedContent,
  Featured,
});

export default exported;
