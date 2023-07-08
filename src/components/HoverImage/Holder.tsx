import * as React from "react";
import clsx from "classnames";
import { graphql, useStaticQuery } from "gatsby";

const Holder: React.FC<{ imageHolderId: string }> = ({ imageHolderId }) => {
  const {
    allFile: { edges },
  } = useStaticQuery<Queries.HolderImageQuery>(query);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      data-image-holder={imageHolderId}
      data-visible={false}
      className="absolute top-0 left-0 w-full h-full overflow-hidden"
      style={
        {
          "--dx": "0px",
          "--dy": "0px",
          "--dz": "0px",
          "--rx": "0deg",
        } as React.CSSProperties
      }
    >
      <div
        className={clsx(
          "absolute pointer-events-none w-full h-full top-0 left-0 z-100 opacity-100",
          {
            "transition-all duration-500": true,
            visible: ref.current?.dataset.visible === "true",
            invisible: ref.current?.dataset.visible === "false",
          }
        )}
      >
        <div
          className={clsx("absolute w-[420px] top-0 left-0", {
            "before:block before:content-[''] before:w-full before:pt-[75%]":
              true,
            "transform-gpu": true,
            "translate-x-[var(--dx)]": true,
            "translate-y-[var(--dy)]": true,
            "translate-z-[var(--dz)]": true,
            "rotate-[var(--rx)]": true,
          })}
        >
          {edges.map(({ node }, i) => (
            <div
              key={i}
              data-holder-id={node.id}
              className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500"
            >
              <div className="overflow-hidden">
                <div className="block relative before:block before:content-[''] w-full pt-[75%]">
                  <div
                    style={
                      {
                        backgroundImage: `url(${node.childImageSharp?.gatsbyImageData?.images?.fallback?.src})`,
                      } as React.CSSProperties
                    }
                    className={clsx(
                      "absolute top-0 left-0 w-full h-full bg-repeat bg-center",
                      {
                        "mt-0 h-[calc(100%+0px)]": true,
                      }
                    )}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Holder;

export const query = graphql`
  query HolderImage {
    allFile(
      filter: { extension: { eq: "jpg" }, relativeDirectory: { eq: "" } }
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
