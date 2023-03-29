import * as React from "react";

import { SEO } from "@components/SEO";

const ErrorPage: React.FC = () => {
  return <div>404: Not Found</div>;
};

export default ErrorPage;

export const Head = () => <SEO title="Error page not found" />;
