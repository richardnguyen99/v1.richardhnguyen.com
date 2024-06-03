import * as React from "react";
import clsx from "classnames";
import { graphql, Link, useStaticQuery } from "gatsby";
import { ArrowRightIcon } from "@primer/octicons-react";
import { GatsbyImage } from "gatsby-plugin-image";

import { SEO } from "@components/SEO";
import Articles from "@components/Article";
import LinkWrapper from "@components/Link/LinkWrapper";

const IndexPage: React.FC = () => {
  const {
    file: {
      childImageSharp: { gatsbyImageData },
    },
  } = useStaticQuery<Queries.IndexQuery>(query);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-[1440px] w-full relative">
          <h1 className="text-7xl font-black font-serif text-center mt-[128px]">
            Explore your favorite programming language
          </h1>
        </div>
      </div>
      <div className="relative -mb-[200px]">
        <div className="overflow-hidden w-full">
          <div className="overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] overscroll-x-contain w-full snap-x snap-mandatory">
            {/** Grid carousel */}
            <div className="relative grid gap-3 grid-flow-col grid-cols-[600px,_repeat(5,1600px)]">
              <div />

              {/** Carousel item */}
              <div className="w-full snap-center relative">
                <div className="relative pb-[200px] pt-[128px]">
                  <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[-1] w-[1600px] h-[840px] bg-slate-900"></div>
                  <div>
                    <div className="transform-gpu overflow-hidden relative bg-slate-900 rounded-lg w-full snap-center aspect-3/4 md:aspect-[16/9] lg:aspect-[2/1] md:min-h-[600px] max-h-[75vh] hover:scale-[1.005] transition-transform duration-[250ms]">
                      <div className="transform-gpu w-full h-full absolute top-0 left-0 will-change-transform">
                        <GatsbyImage
                          image={gatsbyImageData}
                          alt="Python banner"
                          className="w-full h-full object-cover absolute top-0 left-0"
                          imgClassName="object-fit object-center h-full rounded-lg"
                        />
                      </div>
                      <div className="transform-gpu absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center will-change-transform">
                        <Link
                          to="/"
                          className="absolute w-full h-full top-0 left-0"
                        ></Link>
                        <div className="w-[min(calc(100%-40px),1000px)] relative">
                          <h2 className="text-center text-[4.75em]">
                            Pythonic
                          </h2>
                        </div>
                        <div className="w-[min(calc(100%-40px),1000px)] relative mt-4">
                          <p className="text-[2.5em] text-center max-w-[620px] mx-auto">
                            Embrace the indentation
                          </p>
                        </div>
                        <div className="mt-4 flex gap-4 relative">
                          <Link
                            to="/posts"
                            className="transition duration-200 ease-curve-a bg-white text-slate-800 rounded-full px-[1.25em] [text-wrap:nowrap] min-h-[2.5rem] flex items-center justify-center gap-[0.3em] hover:bg-slate-100"
                          >
                            More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div />
            </div>
          </div>
        </div>
      </div>

      <div
        className={clsx("py-12 px-6", {
          "md:max-w-3xl md:py-16 md:px-10 md:mx-auto": true,
          "lg:max-w-4xl lg:py-20": true,
          "xl:max-w-6xl xl:py-24": true,
        })}
      >
        <div className="mt-12" />

        <Articles />

        <div className="my-16 w-56 h-4 bg-gradient-to-tr from-sky-400 to-blue-500" />
        <MoreContentLink />
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO title="Home" description="Home page for the blog of Richard H. Nguyen" />
);

const MoreContentLink: React.FC = () => {
  return (
    <LinkWrapper native href="/posts/">
      <div className="group flex items-center gap-3 mt-16 text-blue-500">
        <h3
          className={clsx("text-5xl font-black", {
            " text-transparent bg-clip-text": true,
            "bg-gradient-to-r": true,
            "from-sky-400 to-blue-500": true,
          })}
        >
          More content
        </h3>
        <ArrowRightIcon
          size={48}
          className={clsx("transition-all duration-100", {
            "opacity-0 -translate-x-4": true,
            "group-hover:opacity-100 group-hover:translate-x-4": true,
          })}
        />
      </div>
    </LinkWrapper>
  );
};

export const query = graphql`
  query Index {
    file(relativePath: { eq: "python-banner.png" }) {
      childImageSharp {
        gatsbyImageData
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
