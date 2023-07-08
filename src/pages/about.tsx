import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { SEO } from "@components/SEO";
import Visibility from "@components/Visibility";
import HoverImage from "@components/HoverImage";
import Holder from "@components/HoverImage/Holder";

const AboutPage: React.FC = () => {
  const {
    allFile: { edges },
  } = useStaticQuery<Queries.AboutPageQuery>(query);

  return (
    <>
      <div>
        <section className="container min-h-[90vh] flex justify-between flex-col py-[2.5vw] mx-6 md:px-10">
          <div className="h-full m-auto flex items-center justify-center w-8/12">
            <h1>
              <span className="text-9xl font-black tracking-widest">ABOUT</span>
            </h1>
          </div>
          <div className="text-center mx-auto lg:max-w-[65%]">
            <div className="text-4xl font-bold tracking-tighter">
              Hi, I&apos;m Richard, a software engineer that loves to build
              apps.
            </div>
          </div>
        </section>
        <div className="h-[18vw] xl:h-[9vw] " />
        <section className="relative bg-[#172022] text-white h-[30vh] lg:h-[50vh] min-h-[400px]">
          <Holder imageHolderId="something" />
          <div className="container flex flex-col items-center justify-center w-full h-full">
            <div className="h-[6vw] xl:h-[5vw] " />
            <h5 className="text-2xl tracking-[0.25em] font-thin">WHO AM I?</h5>
            <div className="font-extrabold uppercase text-3xl my-auto">
              <Visibility visible={true} className="group">
                <div className="overflow-hidden">
                  <div className="transition-transform-opacity ease-smooth-out duration-[800ms] transform-gpu delay-0 group-[.is-visible]:delay-[0ms] opacity-0 group-[.is-visible]:opacity-100 translate-y-full group-[.is-visible]:translate-y-0 group-hidden:-translate-y-full group-hidden:opacity-0">
                    <HoverImage
                      alt=" "
                      srcId={edges[0].node.id}
                      link="https://seattleu.edu"
                    >
                      BSCS @SeattleU
                    </HoverImage>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="transition-transform-opacity ease-smooth-out duration-[800ms] transform-gpu delay-0 group-[.is-visible]:delay-[50ms] opacity-0 group-[.is-visible]:opacity-100 translate-y-full group-[.is-visible]:translate-y-0 group-hidden:-translate-y-full group-hidden:opacity-0">
                    <HoverImage alt=" " srcId={edges[1].node.id} link="#">
                      Software Engineer
                    </HoverImage>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="transition-transform-opacity ease-smooth-out duration-[800ms] transform-gpu delay-0 group-[.is-visible]:delay-[100ms] opacity-0 group-[.is-visible]:opacity-100 translate-y-full group-[.is-visible]:translate-y-0 group-hidden:-translate-y-full group-hidden:opacity-0">
                    <HoverImage alt=" " srcId={edges[2].node.id} link="#">
                      Writer (like This)
                    </HoverImage>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="transition-transform-opacity ease-smooth-out duration-[800ms] transform-gpu delay-0 group-[.is-visible]:delay-[150ms] opacity-0 group-[.is-visible]:opacity-100 translate-y-full group-[.is-visible]:translate-y-0 group-hidden:-translate-y-full group-hidden:opacity-0">
                    <HoverImage alt=" " srcId={edges[3].node.id} link="#">
                      Designer (a bit)
                    </HoverImage>
                  </div>
                </div>
              </Visibility>
            </div>
          </div>
        </section>
        <div className="h-[18vw] xl:h-[9vw] " />
        <section className="relative min-h-screen mt-[-100vh] pt-[100vh] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden"></div>
          <div>
            <div className="h-vw-28 xl:h-vw-12 mobile:hidden" />
            <div className="relative">
              <div className="container text-primary mix-blend-difference">
                <div className="max-w-6xl mx-auto">
                  <h5 className="text-2xl tracking-[0.25em] font-thin text-center">
                    MY WORK
                  </h5>

                  <h2 className="text-4xl mt-[2.5vw] text-center font-extrabold tracking-tighter">
                    FROM LOW-LEVEL TO OVER-ENGINEERED APPS
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-[18vw] xl:h-[9vw] " />
        <section className="">
          <div className="h-[6vw] xl:h-[5vw] " />
          <div className="overflow-hidden">
            <div className="text-[15vw] font-bold tracking-[0.2em] whitespace-nowrap">
              MY SELF
            </div>
          </div>
          <div className="container">
            <div className="text-4xl font-bold tracking-tighter">
              Build apps from end to end. Welcome all challenges and
              architectural problems. Love to share my knowledge with others.
            </div>
            <div className="h-[8vw] xl:h-[vw]" />
            <div>
              <p>
                I came from a small town in Vietname and immigrated to the US in
                2019. I attended 2 years at Highline College and transferred to
                Seattle University to finish my degree in Computer Science.
              </p>
              <p className="block">&nbsp;</p>
              <p>
                My interests are in designing UI/UX, building apps, creating
                backend servers and implementing full CI/CD pipelines. I&apos;m
                also enthusiastic about learning operating systems, networking
                and distributed systems.
              </p>
              <p className="block">&nbsp;</p>
              <p>
                In my free time, I love to build small projects, leet-code and
                share stuff with the world through this blog.
              </p>
            </div>
          </div>
        </section>
        <div className="h-[18vw] xl:h-[9vw] " />
        <section className="container h-[50vh] lg:h-[75vh] min-h-[400px] flex justify-between flex-col py-[2.5vw] mx-6 md:px-10 md:max-w-3xl lg:max-w-6xl">
          <div className="container flex flex-col items-center justify-center w-full h-full">
            <div className="h-[6vw] xl:h-[5vw] " />
            <h5 className="text-2xl tracking-[0.25em] font-thin">
              CONTACT ME!
            </h5>
            <h3 className="text-4xl font-bold mt-[3vw]">
              Open to new opportunities. <br />
              Feel free to reach out to me at richard@richardhnguyen.com
            </h3>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;

export const Head = () => <SEO title="About" />;

export const query = graphql`
  query AboutPage {
    allFile(
      filter: { extension: { eq: "jpg" }, relativeDirectory: { eq: "" } }
    ) {
      edges {
        node {
          id
          relativePath
        }
      }
    }
  }
`;
