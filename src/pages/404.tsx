import * as React from "react";

import { SEO } from "@components/SEO";
import Construction from "@components/Layout/Construction";

const ErrorPage: React.FC = () => {
  return <Construction />;
};

export default ErrorPage;

export const Head = () => <SEO title="Error page not found" />;
