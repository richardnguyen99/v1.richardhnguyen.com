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
  plugins: [
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-1WSKJFCD4F"],
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        // Hash styled-components css when it hits production.
        displayName: process.env.NODE_ENV !== "production",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/config/i18n`,
        name: "i18n",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content`,
      },
    },
    //{
    //resolve: "gatsby-plugin-page-creator",
    //options: {
    //path: `${__dirname}/content`,
    //},
    //},
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Richard H. Nguyen",
        short_name: "richardhnguyen",
        lang: "en",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0f172a",
        display: "standalone",
        icon: "static/icon-512.png",
        icons: [
          {
            src: "static/icon-gradient-16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "static/icon-gradient-24.png",
            sizes: "24x24",
            type: "image/png",
          },
          {
            src: "static/icon-gradient-32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "static/icon-gradient-48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "static/icon-gradient-64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "static/icon-gradient-128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "static/icon-gradient-256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "static/icon-gradient-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "static/icon-gradient-1024.png",
            sizes: "1024x1024",
            type: "image/png",
          },
        ],
        localize: [
          {
            start_url: "/vi/",
            lang: "vi",
            name: "Blog của Richard",
            short_name: "richardhnguyen",
            description: "Blog cá nhân về công nghệ của Richard",
          },
        ],
        crossOrigin: "use-credentials",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/"],
      },
    },
  ],
};

export default config;
