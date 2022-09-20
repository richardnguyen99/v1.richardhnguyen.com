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
    description: "Main page for Richard H. Nguyen",
    author: "@richardnguyen99",
    siteUrl: "http://richardhnguyen.com",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: false,
        ssr: true,
        preprocess: false,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "inline-images",
        path: `${__dirname}/blog/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "thumbnail",
        path: `${__dirname}/blog/thumbnails`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "asset",
        path: `${__dirname}/src/assets`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-netlify",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-remark-images",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 980,
              showCaptions: ["title", "alt"],
              backgroundColor: "transparent",
            },
          },

          // This plugin will generate a link to the headings in markdown and
          // MDX contents.
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              // Only heading 1 & heading 2 are supposed to have links.
              elements: ["h1", "h2"],
              // Custom class to define custom styles.
              className: "custom-anchor",
              // Custom link icon.
              icon: "<p>#</p>",
            },
          },
        ],
        remarkPlugins: [require("remark-math")],
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        // Setting a color is optional.
        color: "tomato",
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`,
  ],
};

export default config;
