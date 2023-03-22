import * as React from "react";
import clsx from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Column from "./Column";
import LegalNotice from "./LegalNotice";
import BuiltByGatsby from "./BuiltByGatsby";

const Footer: React.FC = () => {
  const {
    file: {
      childImageSharp: { gatsbyImageData },
    },
  } = useStaticQuery<Queries.FooterQuery>(query);

  return (
    <footer
      id="footer"
      className="w-full mt-20 bg-gradient-to-b from-zinc-900 to-gray-900 transition-all"
    >
      <div
        id="footer-container"
        className={clsx("px-6", {
          "md:mx-auto md:max-w-3xl md:px-10": true,
          "lg:max-w-4xl": true,
          "xl:max-w-6xl": true,
        })}
      >
        <div className="block md:flex">
          <div className="mb-6 md:w-5/12 md:mb-0">
            <div className="flex items-center">
              <GatsbyImage image={gatsbyImageData} alt="brand-64" />
              <h2 className="text-7xl leading-none font-bold pl-4">Blog</h2>
            </div>
            <div className="mt-6  w-9/12">
              <p className="text-sm text-zinc-400">
                Thanks for reading! If you enjoy my posts, consider subscribing
                to my newsletter for all my latest posts.
              </p>
            </div>
          </div>
          <div
            id="footer-flex-container"
            className="block md:flex flex-grow-[2] flex-col"
          >
            <div
              id="footer-column-container"
              className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            >
              <Column
                title="Categories"
                items={[
                  {
                    type: "gatsby-link",
                    href: "/categories/tutorial",
                    name: "Tutorial",
                  },
                  {
                    type: "gatsby-link",
                    href: "/categories/news",
                    name: "News",
                  },
                  {
                    type: "gatsby-link",
                    href: "/categories/sharing",
                    name: "Sharing",
                  },
                ]}
              />
              <Column
                title="Tags"
                items={[
                  {
                    type: "gatsby-link",
                    href: "/tags/python",
                    name: "Python",
                  },
                  {
                    type: "gatsby-link",
                    href: "/tags/cpp",
                    name: "C++",
                  },
                  {
                    type: "gatsby-link",
                    href: "/tags/react",
                    name: "React",
                  },
                  {
                    type: "gatsby-link",
                    href: "/tags/typescript",
                    name: "TypeScript",
                  },
                ]}
              />
              <Column
                title="About"
                items={[
                  {
                    type: "gatsby-link",
                    href: "/about",
                    name: "I/Me/Myself",
                  },
                  {
                    type: "gatsby-link",
                    href: "/site",
                    name: "Site",
                  },
                  {
                    type: "gatsby-link",
                    href: "/projects",
                    name: "Projects",
                  },
                ]}
              />
              <Column
                title="Connect"
                items={[
                  {
                    type: "a",
                    href: "richard@richardhnguyen.com",
                    name: "Email",
                  },
                  {
                    type: "a",
                    href: "https://twitter.com/richardmhnguyen",
                    name: "Twitter",
                  },
                  {
                    type: "a",
                    href: "https://stackoverflow.com/users/12915739/richard-h-nguyen",
                    name: "GitHub",
                  },
                  {
                    type: "a",
                    href: "https://github.com/richardnguyen99",
                    name: "StackOverflow",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div
          id="footer-extra-info-container"
          className="flex mt-10 pt-10 border-t dark:border-zinc-700"
        >
          <div className="flex-grow-[2]">
            <BuiltByGatsby />
            <LegalNotice />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export const query = graphql`
  query Footer {
    file(relativePath: { eq: "brand-64.png" }) {
      childImageSharp {
        gatsbyImageData
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;