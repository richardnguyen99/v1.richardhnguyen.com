/**
 * A React component to display the blog page (/blog)
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";

import { SEO } from "@components";
import Page from "@components/layout/Page";
import useTranslation from "@hooks/useTranslation";

type QueryReturnType = Queries.BlogQuery;

const BlogPage: React.FC<PageProps<QueryReturnType>> = () => {
  const { translations } = useTranslation("blog");

  return (
    <Page>
      <div>{translations.blogHeadline}</div>
    </Page>
  );
};

export default BlogPage;

export const Head: HeadFC<QueryReturnType> = ({ data }) => {
  const headPage = data.file.childI18NJson.pages.filter(
    (i18nChild) => i18nChild.page === "blog"
  )[0];

  return (
    <SEO
      title={headPage.title}
      description="The latest from Richard H. Nguyen"
    />
  );
};

export const query = graphql`
  query Blog($lang: String!) {
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
            ...Translations
          }
        }
      }
    }
  }

  fragment BlogTranslations on I18NJsonPagesTranslations {
    blogHeadline
    blogAuthor
  }
`;
