import { SEO } from "@components/SEO";
import * as React from "react";

const IndexPage: React.FC = () => {
  return (
    <div>
      <h1>Hello, World</h1>
    </div>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO title="Home" description="Home page for the blog of Richard H. Nguyen" />
);
