import * as React from "react";
import * as Gatsby from "gatsby";
import clsx from "classnames";
import { GatsbyImage } from "gatsby-plugin-image";

const AboutGreetingSection: React.FC = () => {
  const { Avatar } = Gatsby.useStaticQuery<Queries.AboutGreetingQuery>(query);

  return (
    <section
      id="greeting"
      className={clsx(
        "relative min-h-[95vh] z-10, px-6",
        "md:mx-auto md:max-w-3xl md:px-10",
        "lg:max-w-4xl xl:max-w-6xl "
      )}
    >
      <h1 className="peer relative text-[5.75vw] font-black text-black dark:text-white">
        Myself
      </h1>
      <div className="w-3/12 h-2 dark:bg-slate-50 bg-[#0b1416]" />
      <div className="flex flex-col md:flex-row gap-8 mt-10 text-lg">
        <div className="w-full md:w-8/12">
          <p>
            Hi there! I&apos;m Richard, a software engineer that loves to build
            applications end-to-end. I love to challenge myself with new
            technologies and concepts, whether it is about algorithms,
            interfaces, or system designs.
          </p>
          <p>&nbsp;</p>
          <p>
            Back in 2019, I came to the United States to pursue my bachelor of
            science degree in computer science at Seattle University.
            Fast-foward to today, I&apos;ve developed a strong passion for
            building applications.
          </p>
          <p>&nbsp;</p>
          <p>
            My main focus is to develop and expand my skills on scalable and
            high-perfomance applications with sophisticated architectures to
            solve pratical problems. I also love to build small projects and
            share my knowledge with others, like this blog!
          </p>
        </div>
        <div className="relative w-full md:w-4/12 flex items-center -mr-12">
          <div className="absolute top-0 left-0 leading-none lg:top-[-25%]">
            <h1 className="text-[10vw] font-black max-w-[10rem] max-h-[10rem] w-full">
              <p className="hyphens-auto">WO&shy;RK</p>
            </h1>
          </div>
          <div
            className={clsx(
              // general styles for images
              "group block relative z-10",
              "mx-auto mt-12 md:m-0",
              "w-[260px] md:w-full rounded-2xl",
              "bg-cyan-400",

              // animation styles on hovering
              "hover:outline-0 hover:-translate-x-1 hover:-translate-y-1",
              "transition-all duration-300 ease-in-out",

              // before pseudo element styles
              "before:content-[''] before:block before:absolute",
              "before:w-[260px] md:before:w-full before:h-full before:rounded-2xl",
              "before:top-0 before:left-0",
              "before:bg-cyan-400 before:mix-blend-screen",
              "before:transition-all before:duration-300 before:ease-in-out",

              // after pseudo element styles
              "after:content-[''] after:block after:absolute",
              "after:w-[260px] md:after:w-full after:h-full after:rounded-2xl after:z-[-1]",
              "after:transition-all after:duration-300 after:ease-in-out",
              "after:border-2 after:border-cyan-500 after:top-4 after:left-4",
              "hover:after:translate-x-2 hover:after:translate-y-2"
            )}
          >
            <GatsbyImage
              alt="avatar"
              image={Avatar.childImageSharp.gatsbyImageData}
              className={clsx(
                // general styles for images
                "relative overflow-hidden inline-block align-middle z-10",
                "w-[260px] md:w-full h-full rounded-2xl",

                // animation styles
                "duration-300 ease-in-out mix-blend-multiply",
                "filter grayscale contrast-100",
                "group-hover:filter-none group-hover:mix-blend-normal"
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGreetingSection;

const query = Gatsby.graphql`
query AboutGreeting {
  Avatar: file(
    name: {eq: "avatar"}
    relativeDirectory: {eq: "about"}
  ) {
    id
    relativePath
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, quality: 100)
    }
  }
}
`;
