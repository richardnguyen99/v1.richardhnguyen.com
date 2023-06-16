import * as React from "react";
import { GatsbyImage, type IGatsbyImageData } from "gatsby-plugin-image";

export type FrontMatterProps = {
  created: string;
  timeToRead: number;
  author: string;
  thumbnail?: {
    data: IGatsbyImageData;
    author: string;
    authorLink: string;
    alt: string;
  };
};

const FronMatter: React.FC<FrontMatterProps> = ({
  created,
  timeToRead,
  author,
  thumbnail = undefined,
}) => {
  const formatTimeToRead = (time: number) => {
    return `${Math.ceil(time)} min${time > 1 ? "s" : ""}`;
  };

  return (
    <div id="frontmatter" className="w-full mt-4 md:mt-5 lg:mt-6 xl:mt-7">
      <div className="flex items-center gap-3 w-6/12 md:w-5/12 whitespace-nowrap">
        <p>{created}</p>
        <p>·</p>
        <p>{formatTimeToRead(timeToRead)}</p>
        <p>·</p>
        <p>
          By{" "}
          <span className="font-bold border-b hover:border-b-4 cursor-pointer border-sky-500 transition-all">
            {author}
          </span>
        </p>
      </div>
      <div>
        {thumbnail && (
          <>
            <GatsbyImage
              alt={thumbnail.alt}
              imgClassName="rounded-lg"
              className="rounded-lg mt-6 lg:mt-12 border-2  border-slate-700"
              image={thumbnail.data}
            />
            {thumbnail.author && (
              <div className="text-center mb-6 mt-6">
                Source:{" "}
                <a
                  href={thumbnail.authorLink}
                  className="font-bold border-b hover:border-b-4 cursor-pointer  border-sky-500 transition-all"
                >
                  {thumbnail.author}
                </a>
              </div>
            )}
          </>
        )}
      </div>
      <hr className="h-[1px] mt-6 lg:mt-12 rounded-xl dark:bg-slate-700 border-none" />
    </div>
  );
};

export default FronMatter;
