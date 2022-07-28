/**
 * React component for displaying table of contents of a post
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import { Link } from "gatsby";

import { TOCProps } from "./type";
import {
  StyledChapterNav,
  StyledChapterItem,
  StyledChapterIcon,
  StyledChapterActiveLine,
} from "./style";
import SVG from "@components/Svg";

/**
 * Gatsby automatically generated types for table of contents are not well
 * defined (as Record<string, unknown>). So the following two types are mainly
 * for type casting `items`, which is an array of entries to a header.
 */

type ItemProps = {
  title: string;
  url: string;
};

type ItemArrayProps = Array<ItemProps>;

const TOC_OFFSET_FROM_VIEWPORT = 66;

const TOC: React.FC<TOCProps> = ({ toc, ...rest }) => {
  const tocRef = React.useRef<HTMLDivElement>(null);
  const [sticky, setSticky] = React.useState(false);
  const [position, setPosition] = React.useState({
    start: 0,
    end: 0,
    display: false,
  });

  const onScrollSticky = React.useCallback(() => {
    if (tocRef.current) {
      if (tocRef.current.getBoundingClientRect().y === TOC_OFFSET_FROM_VIEWPORT)
        setSticky(true);
      else setSticky(false);
    }
  }, []);

  React.useEffect(() => {
    if (!sticky) {
      window.addEventListener("scroll", onScrollSticky);

      return () => {
        window.removeEventListener("scrolll", onScrollSticky);
      };
    }
  }, [sticky, onScrollSticky]);

  React.useEffect(() => {
    if (tocRef.current) {
      if (tocRef.current.getBoundingClientRect().y === TOC_OFFSET_FROM_VIEWPORT)
        setSticky(true);
    }
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      const id = entry.target.getAttribute("id");

      if (id) {
        const element = document.querySelector(`a[data-toc='#${id}']`);
        console.log(entry.intersectionRatio);
        if (entry.intersectionRatio > 0) {
          if (element) {
            setPosition((old) => ({
              ...old,
              start:
                element.getBoundingClientRect().top -
                tocRef.current.getBoundingClientRect().top,
              end:
                element.getBoundingClientRect().bottom -
                tocRef.current.getBoundingClientRect().top,
              display: !old.display ? true : true,
            }));
          } else {
            setPosition((old) => ({
              ...old,
              start: old.end,
            }));
          }
        }
      }
    });

    document.querySelectorAll("h1[id]").forEach((elm) => {
      observer.observe(elm);
    });
  }, [sticky]);

  // There are some articles, usually short ones, that don't have a table of
  // contents.  The `toc` is still valid but the `items` is empty in that case.
  // Therefore, a check should do the work

  return typeof toc.items !== "undefined" ? (
    <StyledChapterNav id="toc" ref={tocRef}>
      <h5>Table of Contents</h5>

      <StyledChapterActiveLine
        display={position.display}
        start={position.start}
        end={position.end}
      >
        {(toc.items as ItemArrayProps).map((entry, i) => (
          <StyledChapterItem key={i}>
            <Link data-toc={entry.url} to={entry.url}>
              {entry.title}
            </Link>
          </StyledChapterItem>
        ))}
      </StyledChapterActiveLine>
    </StyledChapterNav>
  ) : null;
};

export default TOC;
