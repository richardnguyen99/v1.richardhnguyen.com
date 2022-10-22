/**
 * A React component to display a Not Found page in Gatsby site.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */
import * as React from "react";
import { graphql, PageProps, HeadFC } from "gatsby";

import useTranslation from "@hooks/useTranslation";
import SEO from "@components/SEO";

type QueryReturnType = Queries.NotFoundQuery;

const NotFoundPage: React.FC<PageProps<QueryReturnType>> = ({ data }) => {
  const translation = useTranslation("404");

  return (
    <>
      <h1>404: {translation.title}</h1>
      <p>{translation.components.message}</p>
      <p>
        {translation.components.contact} <u>richard@richardhnguyen.com</u>
      </p>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC<QueryReturnType> = ({ data }) => {
  const headPage = data.file.childI18NJson.pages.filter(
    (i18nChild) => i18nChild.page === "404"
  )[0];

  return <SEO title={headPage.title} description="Page not found" />;
};

export const query = graphql`
  query NotFound($lang: String!) {
    file(fields: { lang: { eq: $lang } }) {
      fields {
        lang
      }
      childI18NJson {
        pages {
          page
          title
          titleTemplate
        }
      }
    }
  }
`;
