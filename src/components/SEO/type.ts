import React from "react";

export type SEOProps = {
  title?: string;
  description?: string;
  pathname?: string;
};

export type SEOComponentType = React.FC<
  SEOProps & React.HTMLAttributes<HTMLElement>
>;
