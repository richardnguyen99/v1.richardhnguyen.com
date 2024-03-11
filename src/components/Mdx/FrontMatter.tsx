import * as React from "react";
import clsx from "classnames";
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
      <div
        className={clsx({
          "flex  gap-3 whitespace-nowrap": true,
          "w-6/12 md:w-5/12": true,
          "justify-start flex-col md:flex-row md:items-center": true,
        })}
      >
        <div className="flex items-center gap-3">
          <p>
            By{" "}
            <span
              className={clsx({
                "font-bold cursor-pointer  transition-all": true,
                "border-b hover:border-b-4 border-sky-500 ": true,
              })}
            >
              {author}
            </span>
          </p>
          <p className="hidden invisible sm:block sm:visible">·</p>
        </div>
        <div className="flex items-center gap-3">
          <p>{created}</p>
          <p>·</p>
          <p>{formatTimeToRead(timeToRead)}</p>
        </div>
      </div>
      <div>
        {thumbnail && (
          <>
            <GatsbyImage
              alt={thumbnail.alt}
              imgClassName="rounded-lg"
              className="rounded-lg mt-6 lg:mt-12 border-2 border-slate-700"
              image={thumbnail.data}
            />
            {thumbnail.author && (
              <div className="text-center mb-6 mt-6">
                Source:{" "}
                <a
                  href={thumbnail.authorLink}
                  className={clsx({
                    "font-bold cursor-pointer transition-all": true,
                    "border-b hover:border-b-4 border-sky-500 ": true,
                  })}
                >
                  {thumbnail.author}
                </a>
              </div>
            )}
          </>
        )}
      </div>
      <hr
        className={clsx({
          "mt-6 lg:mt-12": true,
          "h-[1px] rounded-xl border-none": true,
          "dark:bg-slate-700": true,
        })}
      />
    </div>
  );
};

export default FronMatter;
