/* eslint-disable react/no-unescaped-entities */
/**
 * A React component to display README page (/readme)
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import Layout from "@components/Layout";
import Typography from "@components/Typography";
import Utility from "@components/Utility";
import SVG from "@components/Svg";
import Content from "@components/Content/Content";

import Features from "@features/readme";

const ReadmePage: React.FC = () => {
  return (
    <Layout.Page id="readme" title="README">
      <Features.Hero />
      <Utility.Container>
        <div id="hey-image">
          <SVG.Hey />
          <div>
            <h1>
              I&apos;m&nbsp;
              <Typography.UnderlineText color="red">
                Richard Nguyen
              </Typography.UnderlineText>
            </h1>
            <p>
              A fourth-year CS undergraduate at{" "}
              <a href="https://www.seattleu.edu">Seattle University.</a>
            </p>
          </div>
        </div>
        <hr />
        <h1 id="about-me">👨‍💻 About me</h1>
        <p>
          A Vietnamese boy who has nothing more than passion about technologies,
          computers and dreams.
        </p>
        <p>
          I love sharing my experience and my journey on programming to everyone
          because I believe there are many people who are struggling with the
          same obstacles I have before.
        </p>
        <h1 id="education">🎓 Education</h1>
        <p>
          I finished high school in my home country. I went to{" "}
          <a target="_blank" href="https://www.highline.edu/" rel="noreferrer">
            @HighlineCollege
          </a>{" "}
          to obtain my Associative Degree of Computer Science. Later, I
          transferred to
          <a target="_blank" href="https://www.highline.edu/" rel="noreferrer">
            @SeattleU
          </a>
          &nbsp; and have been studying there since to finish my Bachelor Degree
          in Computer Science.
        </p>
        <h1 id="about-this-site">🌐 About this site</h1>
        <p>
          I tend to write down a lot when I'm struggling with something,
          especially it's about programming. So, this is my digital notebook for
          me to revisit my overcomes. By doing that, I hope it will help someone
          who has the same problem.
        </p>
        <p>
          I work with Python, Typescript, C++ and React a lot so they are my
          primary focus on this site.
        </p>

        <Content>
          <blockquote>
            For you, those hackers out there, you can play with my site{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/richardnguyen99/richardhnguyen.com"
            >
              here.
            </a>
          </blockquote>
        </Content>
        <h1>✉️ Contact</h1>
        <p>
          <span className="bold">Interesting in my work?</span> &mdash; Feel to
          shoot me an email at:{" "}
          <a href="mailto:richard@richardhnguyen.com">
            richard@richardhnguyen.com
          </a>
        </p>
        <p>or you can find me on other platforms:</p>

        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/richardmhnguyen/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/richardnguyen99"
            >
              Github
            </a>
          </li>
        </ul>
      </Utility.Container>
    </Layout.Page>
  );
};

export default ReadmePage;
