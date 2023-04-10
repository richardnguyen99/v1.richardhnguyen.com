import * as React from "react";

import { SEO } from "@components/SEO";
import Construction from "@components/Layout/Construction";

const ProjectPage: React.FC = () => {
  return <Construction />;
};

export const Head = () => <SEO title="Projects" />;

export default ProjectPage;
