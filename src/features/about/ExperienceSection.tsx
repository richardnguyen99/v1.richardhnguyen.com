import * as React from "react";
import * as Gatsby from "gatsby";

import ThemeContext from "@components/Theme/Context";
import HoverProjectCard from "@components/HoverProjectCard";
import { ProjectStatus } from "@components/HoverProjectCard/type";

const AboutExperienceSection: React.FC = () => {
  const { Blog, MetaDark, MetaLight, SDIGearSim, SeattleU } =
    Gatsby.useStaticQuery<Queries.AboutExperienceQuery>(query);
  const { theme } = React.useContext(ThemeContext);

  return (
    <section id="Skills" className="relative w-full min-h-[90vh]">
      <div className="relative px-6 md:mx-auto md:max-w-3xl md:px-10 lg:max-w-4xl xl:max-w-6xl">
        <div className="relative w-5/12 translate-x-2/4 translate-y-2/4">
          <img
            src={
              /* eslint-disable indent */
              theme === "light"
                ? MetaLight.childImageSharp.gatsbyImageData.images.fallback.src
                : MetaDark.childImageSharp.gatsbyImageData.images.fallback.src
              /* eslint-enable indent */
            }
            alt="snippet"
            className="w-full opacity-20"
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t w-full h-20 dark:from-[#0b1416]/100 dark:to-[#0b1416]/0 from-slate-50/100 to-slate-50/0 z-0" />
        </div>
        <h1 className="peer relative text-[5.75vw] font-black text-black dark:text-white">
          My experience
        </h1>
        <div className="relative w-7/12 h-2 dark:bg-slate-50 bg-[#0b1416]" />
        <div className="w-7/12">
          <p className="mt-10 text-lg">
            I have interest in a wide range of applications and technologies.
          </p>
          <p>&nbsp;</p>
          <p>
            Not a full-stack developer, but there is no limits for me to develop
            apps to solve problems, whether it is{" "}
            <span className="font-bold">systems</span>,{" "}
            <span className="font-bold">front-end</span>,{" "}
            <span className="font-bold">back-end</span>or
            <span className="font-bold">infrastructure</span>.
          </p>
          <p>&nbsp;</p>
          <p>Here are some of my work </p>
        </div>
        <div className="styled-list">
          <HoverProjectCard
            defaultImageSrc="https://images.unsplash.com/photo-1518276455915-d0dbe7b2e493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            hoverImageSrc={
              SDIGearSim.childImageSharp.gatsbyImageData.images.fallback.src
            }
            orderImageSrc="#"
            stacks={["Qt", "C++", "QML"]}
            status={ProjectStatus.DONE}
            externalLink="https://www.sdi-eng.com"
            linkText="@SDI Engineering"
            title="SWE, Intern"
          >
            <ul>
              <li>
                I worked in a team that focused on migrating an landing gear
                simulation and analysis tool written from MATHLAB/Simulink to
                C++/Qt
              </li>
              <li>
                I designed the UI architecture for rendering views and numeric
                inputs dynamically based on user&apos;s selection in QML
              </li>
              <li>
                I implemented the file storage API to read, write and save
                user&apos; numeric input using Qt and C++
              </li>
            </ul>
          </HoverProjectCard>
          <HoverProjectCard
            defaultImageSrc="https://images.unsplash.com/photo-1547104442-9f0af4f37a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
            hoverImageSrc={
              Blog.childImageSharp.gatsbyImageData.images.fallback.src
            }
            orderImageSrc="#"
            stacks={["Gatsby", "TypeScript", "TailwindCSS", "MDX"]}
            status={ProjectStatus.IN_PROGRESS}
            externalLink="https://richardhnguyen.com/"
            linkText="@richardhnguyen.com"
            title="Personal blog"
          >
            <ul className="pl-6">
              <li>
                I create <span className="font-bold">this blog</span> to share
                what I learn with you! Most of the content is about software
                engineering, tutorial and general writing in the tech industry.
              </li>
              <li>
                I use <span className="font-mono font-bold">Gatsby</span>,
                <span className="font-mono font-bold">TypeScript</span>, and{" "}
                <span className="font-mono font-bold">TailwindCSS</span> to
                power this blog.
              </li>
              <li>
                I use <span className="font-mono font-bold">MDX</span> as a
                content management system to write my blog posts. I also write
                some custom components and plugins to make my blog more
                interactive than original markdown.
              </li>
            </ul>
          </HoverProjectCard>
          <HoverProjectCard
            defaultImageSrc="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            hoverImageSrc={
              SeattleU.childImageSharp.gatsbyImageData.images.fallback.src
            }
            orderImageSrc="#"
            stacks={["Python", "Java", "C++"]}
            status={ProjectStatus.DONE}
            externalLink="https://www.seattleu.edu/scieng/computer-science/"
            linkText="@SU - CS Dept."
            title="TA / Grader"
          >
            <ul className="pl-6">
              <li>
                I worked as a TA for a variety of programming courses at Seattle
                University, including introductory programming courses, data
                structures, algorithms, computational langage , automata theory
                and bootcamp using C++, Python3, and Java
              </li>
              <li>
                I hosted office hours and workshops to help students get
                familiar with lecture materials, mainly about Java and
                Object-oriented programming
              </li>
            </ul>
          </HoverProjectCard>
        </div>
      </div>
    </section>
  );
};

export default AboutExperienceSection;

const query = Gatsby.graphql`
  query AboutExperience {
  Blog: file(
    name: {eq: "blog"}
    relativeDirectory: {eq: "about"}
  ) {
    id
    relativePath
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, quality: 100)
    }
  }

  SDIGearSim: file(
    name: {eq: "sdi-gearsim"}
    relativeDirectory: {eq: "about"}
  ) {
    id
    relativePath
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, quality: 100)
    }
  }

	SeattleU: file(
    name: {eq: "seattleu"}
    relativeDirectory: {eq: "about"}
  ) {
    id
    relativePath
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, quality: 100)
    }
  }

	MetaDark: file(
    name: {eq: "meta-dark"}
    relativeDirectory: {eq: "about"}
  ) {
    id
    relativePath
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, quality: 100)
    }
  }

  MetaLight: file(
    name: {eq: "meta-light"}
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
