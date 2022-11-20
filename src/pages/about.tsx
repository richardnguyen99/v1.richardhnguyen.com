/**
 * A React component to display the about page (/about)
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";

import useTranslation from "@hooks/useTranslation";
import { SEO } from "@components";

type QueryReturnType = Queries.AboutQuery;

const AboutPage: React.FC<PageProps<QueryReturnType>> = () => {
  const { translations } = useTranslation("about");

  return (
    <>
      <div>{translations.aboutHeadline}</div>
    </>
  );
};

export default AboutPage;

export const Head: HeadFC<QueryReturnType> = ({ data }) => {
  const headPage = data.file.childI18NJson.pages.filter(
    (i18nChild) => i18nChild.page === "about"
  )[0];

  return <SEO title={headPage.title} description="About this page" />;
};

export const query = graphql`
  query About($lang: String!) {
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
            ...AboutTranslations
          }
        }
      }
    }
  }

  fragment AboutTranslations on I18NJsonPagesTranslations {
    aboutHeadline
    aboutAuthor
  }
`;
