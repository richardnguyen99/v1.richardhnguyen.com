import * as React from "react";
import { graphql, PageProps } from "gatsby";
import PageLayout from "@components/Layout/PageLayout";

const TypegenPage = ({ data }: PageProps<Queries.TypegenPageQuery>) => {
  return (
    <PageLayout title="Typegen">
      <p>Site title: TODO</p>
      <hr />
      <p>Query Result:</p>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </PageLayout>
  );
};
export default TypegenPage;

export const query = graphql`
  query TypegenPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
