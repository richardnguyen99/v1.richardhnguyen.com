import * as React from "react";

import { SEO } from "@components/SEO";

const PostPage: React.FC = () => {
  return (
    <div>
      <h1>Post page</h1>
    </div>
  );
};

export const Head = () => <SEO title="Posts" />;

export default PostPage;
