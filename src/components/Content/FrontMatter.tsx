/**
 * React components for FrontMatter information in MDX content
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import { StyledFrontMatter } from "./style";
import { FrontMatterProps } from "./type";

const FrontMatter: React.FC<FrontMatterProps> = ({
  created,
  timeToRead,
  updated = null,
  ...rest
}) => {
  const formattedTimeToRead = `${timeToRead} min read`;
  const frontmatter = [created, updated, formattedTimeToRead];

  return (
    <StyledFrontMatter {...rest}>
      {frontmatter
        .filter((m) => m)
        .map((m, i) => (
          <>
            {i !== 0 && <p className="dot">&#x2022;</p>}
            <p key={i}>{m}</p>
          </>
        ))}
    </StyledFrontMatter>
  );
};

export default FrontMatter;
