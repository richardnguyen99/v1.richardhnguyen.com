/**
 * A React component to replace Heading 1 (#) in Markdown.
 *
 * This component is purposely created to replace heading 1 in markdown so that
 * Intersection Observer API used in the TOC component
 * (see @at {src/components/Content/TOC.tsx} could the capture a full section
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import { SectionProps } from "./type";

const Section: React.FC<SectionProps> = ({ children, title, ...rest }) => {
  return (
    <section {...rest}>
      <h1 {...rest}>{title}</h1>
      {children}
    </section>
  );
};

export default Section;
