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
      className={clsx({
        "w-full pt-20 bg-gradient-to-b transition-all": true,
        "from-slate-50 to-slate-300": true,
        "dark:from-[#0B1416] dark:to-[#070f11]": true,
      })}
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
              <p className="text-sm dark:text-zinc-400">
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
              className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
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
                    href: "/tags/c++",
                    name: "C++",
                  },
                  {
                    type: "gatsby-link",
                    href: "/tags/gatsbyjs",
                    name: "GatsbyJS",
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
                    name: "StackOverflow",
                  },
                  {
                    type: "a",
                    href: "https://github.com/richardnguyen99",
                    name: "GitHub",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div
          id="footer-extra-info-container"
          className={clsx({
            "flex mt-10 pt-10": true,
            "border-t border-zinc-400 dark:border-zinc-700": true,
          })}
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
