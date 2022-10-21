/**
 * A React component for better SEO performance.
 *
 * This component is written based on the Gatsby Head API. More at
 * @see https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";
import { Script } from "gatsby";

import { SEOProps } from "./type";

import useSiteMetadata from "@hooks/useSiteMetadata";

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  pathname,
  children,
}) => {
  const {
    site: { siteMetadata },
  } = useSiteMetadata();

  const getSeoTitle = () => {
    if (title) return `${title}${siteMetadata.titleTemplate}`;

    return siteMetadata.title;
  };

  const getSeoDescription = () => {
    if (description) return description;

    return siteMetadata.description;
  };

  const seo = {
    title: getSeoTitle(),
    description: getSeoDescription(),
    image: `${siteMetadata.siteUrl}${siteMetadata.image}`,
    url: `${siteMetadata.siteUrl}${pathname || ""}`,
    twitterUsername: siteMetadata.twitterUsername,
  };

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: seo.url,
      name: seo.title,
      alternateName: seo.title,
    },
  ];

  /* TODO: update SchemaOrgJSONLD and Facebook for post format */

  return (
    <>
      <title>{seo.title}</title>
      <meta name="image" content={seo.image} />
      <meta name="description" content={seo.description} />

      {/* For Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />

      {/* For Facebook */}
      <meta property="og:url" content={seo.url} />
      {/*postSEO && <meta property="og:type" content="article" /> */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      {/* For Google */}
      <Script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </Script>

      <link rel="preconnect" href="https://rsms.me/" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      {children}
    </>
  );
};

export default SEO;
