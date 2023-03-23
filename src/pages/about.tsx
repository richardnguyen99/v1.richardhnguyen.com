import * as React from "react";

import { SEO } from "@components/SEO";

const AboutPage: React.FC = () => {
  return (
    <div>
      <h1>About page</h1>
    </div>
  );
};

export default AboutPage;

export const Head = () => <SEO title="About" />;
