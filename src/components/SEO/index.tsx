import * as React from "react";
import useSiteMetadata from "@hooks/useSiteMetadata";
import { SEOComponentType } from "./type";

export const SEO: SEOComponentType = ({
  title,
  description,
  pathname,
  children,
}) => {
  const formattedTitle = () => {
    if (typeof title === "undefined" || title === "") return "";

    return `${title} -`;
  };

  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ""}`,
    twitterUsername,
  };

  return (
    <>
      <html
        data-mode="dark"
        lang="en-US"
        className="scroll-smooth transition-colors duration-700"
      />
      <title>
        {formattedTitle()} {defaultTitle}
      </title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {children}
    </>
  );
};
