/**
 * About Me section in /readme
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import ScrollReveal from "scrollreveal";

import { StyledReadme, StyledHeading } from "./style";

import Section from "@components/Section";
import Utility from "@components/Utility";

const AboutMe: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const sr = ScrollReveal();

    if (ref && ref.current) {
      sr.reveal(ref.current, {
        origin: "bottom",
        distance: "30px",
        duration: 500,
        delay: 500,
        mobile: false,
        easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      });
    }

    return () => {
      sr.destroy();
    };
  }, []);

  return (
    <StyledReadme ref={ref}>
      <Section.Landing>
        <Utility.Container>
          <StyledHeading>About me</StyledHeading>
        </Utility.Container>
      </Section.Landing>
    </StyledReadme>
  );
};

export default AboutMe;
