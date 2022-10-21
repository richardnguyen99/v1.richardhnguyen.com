/**
 * This React hook is to query metadata and information on this site. Metadata
 * will be configured at gatsby-config.ts.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { useStaticQuery, graphql } from "gatsby";

export type ReturnType = Queries.SiteMetadataQuery;

const useSiteMetadata = (): ReturnType => {
  const result = useStaticQuery<ReturnType>(query);

  return result;
};

export const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        author
        description
        email
        siteUrl
        title
      }
    }
  }
`;

export default useSiteMetadata;
