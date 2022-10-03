/**
 * Hero section in /readme
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { StyledGreetingText, StyledReadme } from "./style";

import Section from "@components/Section";
import Utility from "@components/Utility";
import Typography from "@components/Typography";
import { StyledGradientRedText as RedGradient } from "@components/Typography/style";

const Hero: React.FC = () => {
  // mounted state will make sure everything is mounted to DOM successfully
  // before triggering the transition animation.
  const [mounted, setMounted] = React.useState(false);

  const Greeting = () => (
    <StyledGreetingText style={{ transitionDelay: "100ms" }}>
      Hello, my name is
    </StyledGreetingText>
  );

  const Gradient = () => (
    <div style={{ transitionDelay: "200ms" }}>
      <RedGradient>Richard Nguyen</RedGradient>
      <span className="waving">👋</span>
    </div>
  );

  const transitionComponents = [Greeting, Gradient];

  React.useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <StyledReadme>
      <Section.Landing>
        <Utility.Container>
          <Typography.HeroHeadline>
            <TransitionGroup component={null}>
              {mounted &&
                transitionComponents.map((component, key) => (
                  <CSSTransition classNames="fade-up" timeout={3000} key={key}>
                    {component}
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </Typography.HeroHeadline>
        </Utility.Container>
      </Section.Landing>
    </StyledReadme>
  );
};

export default Hero;
