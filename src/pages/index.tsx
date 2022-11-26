/**
 * A React component to display the index page (/)
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";

import { Button, Icon, SEO } from "@components";
import Page from "@components/layout/Page";
import useTranslation from "@hooks/useTranslation";
import Dropdown from "@components/Dropdown";

type QueryReturnType = Queries.IndexQuery;

const IndexPage: React.FC<PageProps<QueryReturnType>> = () => {
  const { translations } = useTranslation("index");

  return (
    <Page>
      <div>{translations.indexHeadline}</div>
      <div>
        <Dropdown content="Menu" placement="bottom-left" width="85px">
          <Button transparent>
            <Icon.ThreeBars />
          </Button>
        </Dropdown>
      </div>
    </Page>
  );
};

export default IndexPage;

export const Head: HeadFC<QueryReturnType> = ({ data }) => {
  const headPage = data.file.childI18NJson.pages.filter(
    (i18nChild) => i18nChild.page === "index"
  )[0];

  return (
    <SEO
      title={headPage.title}
      description="The latest from Richard H. Nguyen"
    />
  );
};

export const query = graphql`
  query Index($lang: String!) {
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
            ...IndexTranslations
          }
        }
      }
    }
  }

  fragment IndexTranslations on I18NJsonPagesTranslations {
    indexHeadline
    indexAuthor
  }
`;
