import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

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
        className="w-full mx-auto px-10 py-16 xl:max-w-6xl "
      >
        <div className="flex">
          <div className="w-5/12">
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
            className="flex flex-grow-[2] flex-col"
          >
            <div
              id="footer-column-container"
              className="grid gap-4 grid-cols-4"
            >
              <div>
                <h2 className="font-semibold text-3xl text-sky-400 dark:hover:text-sky-500 pb-6">
                  Categories
                </h2>
                <ul>
                  <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                    Tutorial
                  </li>
                  <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                    News
                  </li>
                  <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                    Sharing
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-3xl text-sky-400 dark:hover:text-sky-500 pb-6">
                  Tags
                </h2>
                <ul>
                  <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                    Python
                  </li>
                  <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                    C++
                  </li>
                  <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                    React
                  </li>
                  <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                    TypeScript
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-3xl text-sky-400 dark:hover:text-sky-500 pb-6">
                  About
                </h2>
                <ul>
                  <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                    I/Me/Myself
                  </li>
                  <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                    This site
                  </li>
                  <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                    Projects
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-3xl text-sky-400 dark:hover:text-sky-500 pb-6">
                  Connect
                </h2>
                <ul>
                  <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                    Discord
                  </li>
                  <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                    Twitter
                  </li>
                  <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                    Github
                  </li>
                  <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                    StackOverflow
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          id="footer-extra-info-container"
          className="flex mt-10 pt-10 border-t dark:border-zinc-700"
        >
          <div className="flex-grow-[2]">
            <p className="text-sm pb-4 italic">
              <span className="underline dark:text-zinc-100 dark:hover:text-white">
                richardhnguyen.com
              </span>{" "}
              is powered by{" "}
              <a
                className="hover:underline text-gatsby"
                target="_blank"
                rel="noreferrer"
                href="https://www.gatsbyjs.com/"
              >
                GatsbyJS
              </a>{" "}
              and is hosted on{" "}
              <a
                className="hover:underline text-gatsby"
                target="_blank"
                rel="noreferrer"
                href="https://www.gatsbyjs.com/dashboard"
              >
                Gatsby Cloud
              </a>
              . More info{" "}
              <Link className="font-bold hover:underline" to="/about-this-page">
                here
              </Link>
              .
            </p>
            <nav
              id="legal-links"
              aria-label="legal"
              className="flex justify-between"
            >
              <span>© 2023 richardhnguyen.com. All Rights Reserved.</span>
              <div className="flex justify-start items-start">
                <Link className="hover:underline" to="/privacy">
                  Privacy Notice
                </Link>
                <span className="px-3">·</span>
                <Link className="hover:underline" to="/terms">
                  Terms of service
                </Link>
                <span className="px-3">·</span>
                <Link className="hover:underline" to="/cookies">
                  Cookie preferences
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      Footer
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
