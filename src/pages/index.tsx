/**
 * A React component to display the index page (/)
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */
import * as React from "react";

import GlobalStyle from "@components/GlobalStyle";
import SEO from "@components/SEO";

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <div>Hello, World</div>
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO title={"Home"} description="The latest from Richard H. Nguyen" />
);
