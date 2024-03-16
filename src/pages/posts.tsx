import * as React from "react";

import { SEO } from "@components/SEO";
import PostsTimeline from "@features/posts/Timeline";

const PostPage: React.FC = () => {
  return <PostsTimeline />;
};

export const Head = () => <SEO title="Posts" />;

export default PostPage;
