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
  orderImageSrc,
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
      className={clsx("w-[90%]", {
        "mx-auto mt-20 first:mt-10": true,
      })}
      data-image-1={defaultImageSrc}
      data-image-2={hoverImageSrc}
    >
      <div
        className={clsx("", {
          "w-full h-full": true,
          flex: true,
          "p-12 rounded-[3rem]": true,
          "bg-slate-100 dark:bg-[rgb(20,29,31)]": true,
        })}
      >
        <div
          ref={imageRef}
          className={clsx({
            "w-[320px] h-[400px]": true,
            "bg-cover relative overflow-hidden": true,
            "rounded-[3rem]": true,
          })}
        >
          <div className="block opacity-0" />
        </div>
        <div
          className={clsx("", {
            "w-[calc(100%-320px)] ml-24 ": true,
            "flex flex-col justify-between": true,
          })}
        >
          <div className="grid grid-cols-[repeat(5,_1fr)_minmax(32px,_auto)] w-full items-center">
            <h1 className="lg:order-1 col-start-1 col-span-3 text-3xl font-black overflow-auto">
              {title}
            </h1>

            <div className="lg:order-2 flex col-start-4 col-span-3 col-end-6 items-center gap-3">
              {externalLink !== "#" && (
                <a
                  href={externalLink}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto"
                >
                  <span className="font-bold text-slate-500">{linkText}</span>
                </a>
              )}
            </div>
            <span className="lg:order-3 flex col-span-1 col-end-7 ml-auto text-2xl font-black">
              {renderStatus(status)}
            </span>
          </div>
          <div>{children}</div>
          <div className="flex gap-1 mt-auto">
            {stacks.map((stack, index) => (
              <a key={index} href="#" target="_blank">
                <span
                  className={clsx("", {
                    "rounded-full  px-4 py-2 text-sm font-bold": true,
                    "bg-slate-400 hover:bg-slate-500 ": true,
                    "text-slate-100 hover:text-white": true,
                    "dark:text-neutral-200 dark:hover:text-100": true,
                    "dark:bg-neutral-700 dark:hover:bg-neutral-600": true,
                  })}
                >
                  {stack}
                </span>
              </a>
            ))}
          </div>
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
