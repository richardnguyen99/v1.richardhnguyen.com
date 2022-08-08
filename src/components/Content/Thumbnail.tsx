/**
 * React component for displaying the thumbnail of MDX content.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import { ThumbnailProps } from "./type";
import { StyledThumbnail } from "./style";

const Thumbnail = ({ children, ...rest }: ThumbnailProps) => {
  return <StyledThumbnail {...rest}>{children}</StyledThumbnail>;
};

export default Thumbnail;
