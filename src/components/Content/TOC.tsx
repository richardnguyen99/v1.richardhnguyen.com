/**
 * React component for displaying table of contents of a post
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import { StyledStickySideContent } from "./style";

import { TOCProps } from "./type";

/**
 * Gatsby automatically generated types for table of contents are not well
 * defined (as Record<string, unknown>). So the following two types are mainly
 * for type casting `items`, which is an array of entries to a header.
 */

type ItemProps = {
  title: string;
  url: string;
};

type ItemArrayProps = Array<ItemProps>;

const TOC: React.FC<TOCProps> = ({ toc, ...rest }) => {
  // There are some articles, usually short ones, that don't have a table of
  // contents.  The `toc` is still valid but the `items` is empty in that case.
  // Therefore, a check should do the work

  return typeof toc.items !== "undefined" ? (
    <StyledStickySideContent {...rest}>
      {(toc.items as ItemArrayProps).map((entry, key) => (
        <p key={entry.url}>{entry.title}</p>
      ))}
    </StyledStickySideContent>
  ) : null;
};

export default TOC;
