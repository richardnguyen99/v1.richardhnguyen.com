/**
 * Index page (/)
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import Layout from "@components/Layout";

const IndexPage: React.FC = () => {
  return (
    <Layout.Page title="Home">
      <h1>Hello, World</h1>
    </Layout.Page>
  );
};

export default IndexPage;
