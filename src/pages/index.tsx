/**
 * A React component to display the index page (/)
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */
import * as React from "react";
import { PageProps } from "gatsby";

import GlobalStyle from "@components/GlobalStyle";
import SEO from "@components/SEO";

import useTranslation from "@hooks/useTranslation";

const IndexPage = ({ pageContext }: PageProps) => {
  const translations = useTranslation("index");

  return (
    <>
      <GlobalStyle />
      <div>{translations.components.headline.normal}</div>
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO title={"Home"} description="The latest from Richard H. Nguyen" />
);
