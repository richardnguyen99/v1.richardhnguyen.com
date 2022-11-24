/**
 * Runtime error pages for Gatsby application
 *
 * @author Richard Mguyen <richard@richardhnguyen.com>
 */

import * as React from "react";
import { graphql, HeadFC } from "gatsby";

import Page from "@components/layout/Page";
import SEO from "@components/SEO";
import useTranslation from "@hooks/useTranslation";

type QueryReturnType = Queries.InternalServerQuery;

const RuntimeError = () => {
  const { translations } = useTranslation("500");

  return (
    <Page>
      <h1>{translations.serverHeadline}</h1>
      <p>{translations.serverMessage}</p>
      <p>
        {translations.serverSuggest} <u>richard@richardhnguyen.com</u>
      </p>
    </Page>
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
          translations {
            ...InternalErrorTranslations
          }
        }
      }
    }
  }

  fragment InternalErrorTranslations on I18NJsonPagesTranslations {
    serverHeadline
    serverMessage
    serverSuggest
  }
`;
