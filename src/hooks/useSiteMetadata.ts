import { graphql, useStaticQuery } from "gatsby";

const useMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          titleTemplate
          description
          twitterUsername
          author
          image
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useMetadata;
