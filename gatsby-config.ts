/**
 * Support for Typescript
 *
 * @see https://www.gatsbyjs.com/docs/
 */

import { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  graphqlTypegen: true,
  siteMetadata: {
    title: "Richard H. Nguyen",
    titleTemplate: " - Richard H. Nguyen",
    description: "Main page for Richard H. Nguyen",
    author: "@richardnguyen99",
    siteUrl: "https://richardhnguyen.com",
    email: "richard@richardnguyen.com",
    twitterUsername: "@richardmhnguyen",
    image: "/icon-512.png",
  },
  plugins: ["gatsby-plugin-styled-components"],
};

export default config;
