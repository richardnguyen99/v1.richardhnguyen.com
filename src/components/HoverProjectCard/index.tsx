import * as React from "react";
import clsx from "classnames";
import hoverEffect from "hover-effect";
import { graphql, useStaticQuery } from "gatsby";

import { HoverProjectCardProps, ProjectStatus } from "./type";
import { CheckIcon, FlameIcon } from "@primer/octicons-react";

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & HoverProjectCardProps
>;

const HoverProjectCard: React.FC<Props> = ({
  defaultImageSrc,
  hoverImageSrc,
  stacks,
  title,
  externalLink = "#",
  linkText = "",
  status,
  children,
  ...rest
}) => {
  const {
    allFile: { edges },
  } = useStaticQuery<Queries.DistortionImageQuery>(query);

  const imageRef = React.useRef<HTMLDivElement>(null);

  const renderStatus = (status: ProjectStatus) => {
    /* eslint-disable indent */
    switch (status) {
      case ProjectStatus.DONE:
        return <CheckIcon className="w-5 h-5 fill-green-400" />;
      case ProjectStatus.IN_PROGRESS:
        return <FlameIcon className="w-5 h-5 fill-amber-500" />;
      case ProjectStatus.ON_HOLD:
        return "on hold";
      default:
        return "upcoming";
    }
    /* eslint-enable indent */
  };

  React.useEffect(() => {
    if (!imageRef.current) return;

    new hoverEffect({
      parent: imageRef.current,
      intensity: 0.3,
      image1: defaultImageSrc,
      image2: hoverImageSrc,
      displacementImage:
        edges[0].node.childImageSharp.gatsbyImageData.images.fallback.src,
    });
  }, [defaultImageSrc, edges, hoverImageSrc]);

  return (
    <div
      {...rest}
      className={clsx("w-full xl:w-[90%] overflow-hidden", {
        "mx-auto mt-20 first:mt-10": true,
        "w-full h-full": true,
        "p-12 rounded-[3rem]": true,
        "bg-slate-100 dark:bg-[rgb(20,29,31)]": true,
      })}
      data-image-1={defaultImageSrc}
      data-image-2={hoverImageSrc}
    >
      <div
        className={clsx("", {
          flex: true,
        })}
      >
        <div
          ref={imageRef}
          className={clsx({
            "w-[192px] h-[240px]": true,
            "md:w-[256px] md:h-[320px]": true,
            "lg:w-[320px] lg:h-[400px]": true,
            "bg-cover relative overflow-hidden": true,
            "rounded-[3rem]": true,
          })}
        >
          <div className="block opacity-0" />
        </div>
        <div
          className={clsx({
            "relative flex flex-col overflow-hidden": true,
            "w-[calc(100%-192px)] h-[240px]": true,
            "md:w-[calc(100%-256px)] md:h-[320px]": true,
            "lg:w-[calc(100%-320px)] lg:h-[400px]": true,
            "ml-12 lg:ml-16 xl:ml-24 ": true,
          })}
        >
          <div
            className={clsx({
              "grid grid-cols-[repeat(5,_1fr)_minmax(32px,_auto)]": true,
              "w-full items-center": true,
            })}
          >
            <h1
              className={clsx({
                "col-span-5 xl:col-start-1 xl:col-span-3": true,
                "order-1 text-3xl font-black overflow-auto": true,
              })}
            >
              {title}
            </h1>

            <div
              className={clsx({
                "order-3 xl:order-2": true,
                "col-start-1 xl:col-start-4": true,
                "col-span-6 xl:col-span-3 xl:col-end-6": true,
                "flex items-center gap-3": true,
              })}
            >
              {externalLink !== "#" && (
                <a
                  href={externalLink}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-0 xl:ml-auto"
                >
                  <span className="font-bold text-slate-500">{linkText}</span>
                </a>
              )}
            </div>
            <span
              className={clsx({
                "flex items-center justify-center text-2xl font-black": true,
                "order-2 xl:order-3": true,
                "col-span-1 col-end-7 xl:ml-auto": true,
              })}
            >
              {renderStatus(status)}
            </span>
          </div>
          <div>{children}</div>
          <div className="absolute bottom-0 left-0 w-full">
            <div
              className={clsx({
                "relative bg-gradient-to-t h-[100px]": true,
                "from-0% via-75%": true,
                "from-slate-100/100 dark:from-[rgba(20,29,31,1)]": true,
                "via-slate-100/90 dark:via-[rgba(20,29,31,0.9)]": true,
                "to-slate-100/[0] dark:to-[rgba(20,29,31,0)] ": true,
              })}
            >
              <div className="absolute bottom-[10%] left-0">
                <a
                  href={externalLink}
                  target="_blank"
                  rel="noreferrer"
                  className={clsx("flex items-center gap-3 relative", {
                    "text-base font-light uppercase tracking-[0.15em]": true,
                    "lg:text-lg lg:tracking-[0.25em]": true,

                    "text-slate-800 dark:text-slate-200": true,
                    "hover:text-slate-950  dark:hover:text-slate-50": true,

                    "after:content-[''] after:absolute after:block": true,
                    "after:left-0 after:bottom-0": true,
                    "after:h-[2px] after:w-0 hover:after:w-full": true,
                    "after:bg-sky-500": true,
                    "after:transition-[width] after:duration-300 after:ease-in-out":
                      true,
                  })}
                >
                  <span>View Project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-fit">
        <div
          className={clsx({
            "flex items-center gap-4": true,
            "mt-8 w-full overflow-x-hidden": true,
            "before:content-[''] before:block": true,
            "before:w-[120px] before:h-[1px] before:dark:bg-white": true,
          })}
        >
          {stacks.map((stack, index) => (
            <a
              href="#"
              key={index}
              className={clsx({
                "text-sm uppercase font-light tracking-[0.25em]": true,
                "after:content-[','] last-of-type:after:content-['']": true,
              })}
            >
              {stack}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverProjectCard;

export const query = graphql`
  query DistortionImage {
    allFile(
      filter: { name: { eq: "distortion" }, relativeDirectory: { eq: "about" } }
    ) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
      }
    }
  }
`;
