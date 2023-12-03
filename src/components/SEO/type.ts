import React from "react";

export type OpenGraphType = {
  type?: string;
  title?: string;
  description?: string;
  image?: string;
  site_name?: string;
  locale?: string;
  url?: string;
};

export type SEOProps = {
  title?: string;
  description?: string;
  pathname?: string;

  openGraph?: OpenGraphType;
};

export type SEOComponentType = React.FC<
  SEOProps & React.HTMLAttributes<HTMLElement>
>;
