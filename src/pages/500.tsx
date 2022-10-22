/**
 * Runtime error pages for Gatsby application
 *
 * @author Richard Mguyen <richard@richardhnguyen.com>
 */

import * as React from "react";
import { graphql, HeadFC } from "gatsby";

import SEO from "@components/SEO";
import useTranslation from "@hooks/useTranslation";

type QueryReturnType = Queries.InternalServerQuery;

const RuntimeError = () => {
  const translations = useTranslation("500");

  return (
    <>
      <h1>500: {translations.title}</h1>
      <p>{translations.components.message}</p>
      <p>
        {translations.components.contact} <u>richard@richardhnguyen.com</u>
      </p>
    </>
  );
};

export default RuntimeError;

export const Head: HeadFC<QueryReturnType> = ({ data }) => {
  const headPage = data.file.childI18NJson.pages.filter(
    (i18nChild) => i18nChild.page === "500"
  )[0];

  return <SEO title={headPage.title} description="Page not found" />;
};

export const query = graphql`
  query InternalServer($lang: String!) {
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
