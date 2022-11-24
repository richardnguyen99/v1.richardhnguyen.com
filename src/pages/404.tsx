/**
 * A React component to display a Not Found page in Gatsby site.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */
import * as React from "react";
import { graphql, PageProps, HeadFC } from "gatsby";
import { navigate } from "@reach/router";

import Page from "@components/layout/Page";
import SEO from "@components/SEO";
import Locale from "@contexts/Locale";
import useTranslation from "@hooks/useTranslation";

type QueryReturnType = Queries.NotFoundQuery;

const NotFoundPage: React.FC<PageProps<QueryReturnType>> = () => {
  const [redirected, setRedirected] = React.useState(false);
  const localeContext = React.useContext(Locale.Context);
  const { translations } = useTranslation("404");

  React.useEffect(() => {
    let redirectPath = "/404.html";

    if (!redirected && typeof window !== "undefined") {
      const lang = window.location.href.split("/").at(3);

      // Move to use `in` when there are multiple languages
      if (lang === "vi") redirectPath = `/${lang}${redirectPath}`;

      navigate(redirectPath);

      setRedirected(true);
    }
  }, [localeContext.lang, redirected]);

  return (
    <Page>
      <h1>{translations.notFoundHeadline}</h1>
      <p>{translations.notFoundMessage}</p>
      <p>
        {translations.notFoundSuggest} <u>richard@richardhnguyen.com</u>
      </p>
    </Page>
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
          translations {
            ...NotFoundTranslations
          }
        }
      }
    }
  }

  fragment NotFoundTranslations on I18NJsonPagesTranslations {
    notFoundHeadline
    notFoundMessage
    notFoundSuggest
  }
`;
