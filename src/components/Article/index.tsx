import { graphql } from "gatsby";
import * as React from "react";
import ArticleCard from "./ArticleCard";

import HeroArticle from "./Hero";

const ArticleContainer: React.FC = () => {
  return (
    <div id="article-container" className="flex flex-wrap">
      <HeroArticle />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  );
};

export default ArticleContainer;
