/**
 * A React component to display the index page (/)
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */
import * as React from "react";

import GlobalStyle from "@components/GlobalStyle";
import SEO from "@components/SEO";
import useSiteMetadata from "@hooks/useSiteMetadata";

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <div>Hello, World</div>
    </>
  );
};

export default IndexPage;

export const Head = () => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useSiteMetadata();

  return (
    <SEO title={`Home — ${title}`} description={description}>
      <link rel="preconnect" href="https://rsms.me/" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </SEO>
  );
};
