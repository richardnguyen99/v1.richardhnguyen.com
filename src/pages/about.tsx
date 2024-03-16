import * as React from "react";

import { SEO } from "@components/SEO";
import AboutFeatures from "@features/about";

const AboutPage: React.FC = () => {
  return (
    <div className="scroll-smooth relative overflow-hidden">
      <AboutFeatures.ArrowAnimation />
      <AboutFeatures.Landing />

      <AboutFeatures.GreetingSection />
      <AboutFeatures.ExperienceSection />
      <AboutFeatures.ContactSection />
    </div>
  );
};

export default AboutPage;

export const Head = () => <SEO title="About" />;
