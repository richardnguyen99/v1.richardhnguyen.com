/**
 * Index page (/)
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import Seo from "@components/SEO";

const IndexPage: React.FC = () => {
  return (
    <main>
      <Seo title="Home" lang="en" />
    </main>
  );
};

export default IndexPage;
