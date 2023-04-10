import * as React from "react";

import { SEO } from "@components/SEO";
import Construction from "@components/Layout/Construction";

const InternalErrorPage: React.FC = () => {
  return <Construction />;
};

export default InternalErrorPage;

export const Head = () => <SEO title="Internal error from this site" />;
