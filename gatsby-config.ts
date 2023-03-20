/**
 * Support for Typescript
 *
 * @see https://www.gatsbyjs.com/docs/
 */

import dotenv from "dotenv";
import { GatsbyConfig } from "gatsby";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  graphqlTypegen: true,
  siteMetadata: {
    title: "Richard H. Nguyen",
    titleTemplate: "Richard H. Nguyen",
    description: "Main page for Richard H. Nguyen",
    twitterUsername: "@richardmhnguyen",
    author: "@richardnguyen99",
    image: "static/brand-16.png",
    siteUrl: "http://richardhnguyen.com",
  },
  plugins: [
    // For working with images
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    // For TailwindCSS
    "gatsby-plugin-postcss",

    // For React and SVG
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },

    // For connecting with Github Source GraphQL
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },

    // For web app manifest
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Richard H Nguyen's blog",
        short_name: "richardhnguyen.com",
        lang: "en",
        start_url: "/",
        background_color: "#18181b",
        theme_color: "#818cf8",
        display: "standalone",
        crossOrigin: "use-credentials",
        icon: "static/brand-16.png",
        icons: [
          {
            src: "static/brand-16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "static/brand-32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "static/brand-64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "static/brand-96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "static/brand-128.png",
            sizes: "128x128",
            type: "image/png",
          },
        ],
      },
    },
  ],
};

export default config;
