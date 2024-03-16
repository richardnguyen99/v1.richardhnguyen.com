import * as React from "react";
import * as Gatsby from "gatsby";
import clsx from "classnames";

import BorderLink from "@components/Link/BorderLink";
import ThemeContext from "@components/Theme/Context";
import { graphql } from "gatsby";

/**
 * Landing section for the `About` page only.
 */
const AboutLanding: React.FC = () => {
  const { SnippetDark, SnippetLight } =
    Gatsby.useStaticQuery<Queries.AboutLandingQuery>(query);
  const { theme } = React.useContext(ThemeContext);

  return (
    <section
      id="about-landing"
      className={clsx(
        "flex flex-col justify-between",
        "px-6 md:px-10 md:mx-auto",
        "md:max-w-3xl lg:max-w-4xl xl:max-w-6xl",
        "min-h-[95vh]"
      )}
    >
      {/* Banner */}
      <div id="banner" className="mt-[10rem]">
        <div
          className={clsx(
            "text-[10vw] md:text-[7.5vw] lg:text-[5vw]",
            "leading-none font-black"
          )}
        >
          <p>i build apps,</p>
          <p>
            from <span className="font-mono">low-level</span>
          </p>
          <p>to over-engineered.</p>
        </div>

        <div className="mt-[5rem]">
          <div
            className={clsx(
              "flex items-center gap-4",
              "uppercase font-thin tracking-widest"
            )}
          >
            <BorderLink native={false} href="#">
              View Projects
            </BorderLink>
            <BorderLink native={false} href="#">
              My GitHub
            </BorderLink>
          </div>
        </div>
      </div>

      <div className="relative translate-y-1/4">
        <img
          src={
            /* eslint-disable indent */
            theme === "light"
              ? SnippetLight.childImageSharp.gatsbyImageData.images.fallback.src
              : SnippetDark.childImageSharp.gatsbyImageData.images.fallback.src
            /* eslint-enable indent */
          }
          alt="snippet"
          className="w-full opacity-20 "
        />
        <div
          className={clsx(
            "w-full h-40",
            "absolute bottom-0 left-0 z-0",
            "bg-gradient-to-t",
            "dark:from-[#0b1416]/100 dark:to-[#0b1416]/0",
            "from-slate-50/100 to-slate-50/0"
          )}
        />
      </div>
    </section>
  );
};

export default AboutLanding;

const query = graphql`
  query AboutLanding {
    SnippetDark: file(
      name: { eq: "snippet-dark" }
      relativeDirectory: { eq: "about" }
    ) {
      id
      relativePath
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100)
      }
    }
    SnippetLight: file(
      name: { eq: "snippet-light" }
      relativeDirectory: { eq: "about" }
    ) {
      id
      relativePath
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100)
      }
    }
  }
`;
