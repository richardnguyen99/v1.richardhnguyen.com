import * as React from "react";

import { SEO } from "@components/SEO";
import Timeline from "@components/Article/Timeline";

const PostPage: React.FC = () => {
  return <Timeline />;
};

export const Head = () => <SEO title="Posts" />;

export default PostPage;
