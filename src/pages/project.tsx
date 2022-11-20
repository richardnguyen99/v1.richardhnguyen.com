/**
 * A React component to display the project page (/project)
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";

import useTranslation from "@hooks/useTranslation";
import { SEO } from "@components";

type QueryReturnType = Queries.ProjectQuery;

const ProjectPage: React.FC<PageProps<QueryReturnType>> = () => {
  const { translations } = useTranslation("project");

  return (
    <>
      <div>{translations.projectHeadline}</div>
    </>
  );
};

export default ProjectPage;

export const Head: HeadFC<QueryReturnType> = ({ data }) => {
  const headPage = data.file.childI18NJson.pages.filter(
    (i18nChild) => i18nChild.page === "project"
  )[0];

  return <SEO title={headPage.title} description="Projects done by Richard" />;
};

export const query = graphql`
  query Project($lang: String!) {
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
            ...ProjectTranslations
          }
        }
      }
    }
  }

  fragment ProjectTranslations on I18NJsonPagesTranslations {
    projectHeadline
    projectAuthor
  }
`;
