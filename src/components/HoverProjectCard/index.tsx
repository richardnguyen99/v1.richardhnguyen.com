import * as React from "react";
import clsx from "classnames";
import hoverEffect from "hover-effect";
import { graphql, useStaticQuery } from "gatsby";

import { HoverProjectCardProps } from "./type";

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
  status,
  children,
  ...rest
}) => {
  const {
    allFile: { edges },
  } = useStaticQuery<Queries.DistortionImageQuery>(query);

  const imageRef = React.useRef<HTMLDivElement>(null);

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
      className={clsx("w-[80%]", {
        "mx-auto mt-60": true,
      })}
      data-image-1={defaultImageSrc}
      data-image-2={hoverImageSrc}
    >
      <div
        className={clsx("", {
          "w-full h-full": true,
          "flex items-center": true,
          "p-24": true,
        })}
      >
        <div
          ref={imageRef}
          className={clsx({
            "w-[20rem] h-[25rem]": true,
            "bg-cover relative overflow-hidden": true,
            "rounded-3xl": true,
          })}
        >
          <div className="block opacity-0" />
        </div>
        <div
          className={clsx("", {
            "ml-24 ": true,
          })}
        >
          <h2>{title}</h2>
          <div>{children}</div>
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
