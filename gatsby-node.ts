/**
 * Support for Typescript
 *
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#gatsby-nodets
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#requireresolve
 */

import path from "path";
import slugify from "slugify";
import { CreateNodeArgs, GatsbyNode } from "gatsby";

import i18n from "./config/i18n";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  // This custom Webpack configuration allows shortcut for each folder in the
  // `src` directory so that "../../something" can be avoided.
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@mixins": path.resolve(__dirname, "src", "mixins"),
        "@components": path.resolve(__dirname, "src", "components"),
        "@features": path.resolve(__dirname, "src", "features"),
        "@pages": path.resolve(__dirname, "src", "pages"),
        "@hooks": path.resolve(__dirname, "src", "hooks"),
        "@utils": path.resolve(__dirname, "src", "utils"),
        "@config": path.resolve(__dirname, "src", "config"),
        "@contexts": path.resolve(__dirname, "src", "contexts"),
        "@constants": path.resolve(__dirname, "src", "constants"),
      },
    },
  });
};

export const onCreatePage: GatsbyNode["onCreatePage"] = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  // Delete automatically-generated page
  deletePage(page);

  // Create the exact page with customized page context
  if (page.path.indexOf("/blog/") === -1 || page.path === "/blog/") {
    Object.keys(i18n).map((lang) => {
      //
      const pagePath = i18n[lang].default
        ? page.path
        : `${i18n[lang].path}${page.path}`;

      return createPage({
        ...page,
        path: pagePath,
        context: {
          ...page.context,
          lang,
          dateFormat: i18n[lang].dateFormat,
        },
      });
    });
  } else {
    const isDefaultPath = page.path.indexOf("/en/") !== -1;

    // A page path that falls in this section should look like this:
    //
    //  `/blog/en/blog-name-goes-here`
    //  `/blog/vi/blog-name-goes-here`
    //
    // After `split`, the output array looks like this:
    //
    //  `["", "blog", "en", "blog-name-goes-here", ""]`
    //  `["", "blog", "vi", "blog-name-goes-here", ""]`
    const splittedPathParams = page.path.split("/");

    // Swap "blog" with languages that are not default such as "vi".
    [splittedPathParams[1], splittedPathParams[2]] = [
      splittedPathParams[2],
      splittedPathParams[1],
    ];

    // If english is the language, by default, it will be trimmed.
    splittedPathParams.splice(1, isDefaultPath ? 1 : 0);

    /**
     * Page paths to createPage should look like this:
     *
     * `/vi/blog/blog-name-goes-here`
     * `/blog/blog-name-goes-here`    # English.
     */
    const pagePath = splittedPathParams.join("/");

    return createPage({
      ...page,
      path: pagePath,
    });
  }
};

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
}: CreateNodeArgs<Queries.Mdx>) => {
  const { createNodeField } = actions;

  if (node.internal.type === "File" && node.extension === "json")
    createNodeField({ node, name: "lang", value: node.name });

  if (node.internal.type === "Mdx") {
    // Every MDX node's name is a translation, not the actual content's name.
    const contentName = path
      .dirname(node.internal.contentFilePath)
      .split("/")
      .at(-1);

    const language = path
      .basename(node.internal.contentFilePath)
      .split(".")[0]
      .toLowerCase();

    createNodeField({
      node,
      name: "slug",
      value: `${language}/${slugify(contentName, {
        lower: true,
      })}`,
    });

    createNodeField({
      node,
      name: "lang",
      value: language,
    });
  }
};
