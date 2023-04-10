import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Construction: React.FC = () => {
  const {
    file: {
      childImageSharp: { gatsbyImageData },
    },
  } = useStaticQuery<Queries.ConstructorQuery>(query);

  return (
    <div className="md:max-w-3xl lg:max-w-4xl xl:max-w-6xl md:flex items-center justify-center mx-auto px-10 mt-6">
      <div className="w-full xl:w-5/12 mb-12 md:mb-0">
        <h1 className="font-black text-orange-400 text-center text-6xl md:text-left md:text-6xl lg:text-7xl xl:text-8xl mb-6">
          Oops!!
        </h1>
        <h3 className="text-center text-3xl md:text-left md:text-xl  xl:text-2xl font-medium">
          This page is under construction. Please check back later for updates.
        </h3>
      </div>

      <div className="w-full xl:w-7/12">
        <GatsbyImage
          image={gatsbyImageData}
          alt="page-under-construction"
          imgClassName=""
        />
      </div>
    </div>
  );
};

export default Construction;

export const query = graphql`
  query Constructor {
    file(relativePath: { eq: "page-under-construction.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED)
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
