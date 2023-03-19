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
