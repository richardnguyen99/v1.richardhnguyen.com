/**
 * A React component for displaying table of contents of an article.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import { Link } from "gatsby";

import { TOCProps } from "./type";
import {
  StyledChapterNav,
  StyledChapterItem,
  StyledChapterActiveLine,
} from "./style";

/**
 * Gatsby automatically generated types for table of contents are not well
 * defined (as Record<string, unknown>). So the following two types are mainly
 * for type casting `items`, which is an array of entries to a header.
 */

type ItemProps = {
  title: string;
  url: string;
  items?: Array<{
    title: string;
    url: string;
  }>;
};

type ItemArrayProps = Array<ItemProps>;

const TOC: React.FC<TOCProps> = ({ toc, ...rest }) => {
  const tocRef = React.useRef<HTMLDivElement>(null);

  // position to display the active vertical bar.
  // start will indicate the position of that bar whereas end simply marks the
  // height of that bar in case there is a multi-line headers displayed in the
  // toc component.
  const [position, setPosition] = React.useState({
    start: 0,
    end: 0,
    display: false,
  });

  const [activeId, setActiveId] = React.useState("test");
  const [mounted, setMounted] = React.useState(false);

  const isInViewport = (elm: Element) => {
    const rect = elm.getBoundingClientRect();

    if (elm.getAttribute("id") === "fill-constructor") {
      console.log(rect);
    }

    return (
      rect.top >= -2 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  React.useEffect(() => {
    if (!position.display) {
      document.querySelectorAll("h1[id]").forEach((elm) => {
        const elmId = elm.getAttribute("id");

        if (isInViewport(elm)) {
          const toc = document.querySelector(`a[data-toc='#${elmId}']`);
          setPosition((old) => ({
            ...old,
            start:
              toc.getBoundingClientRect().top -
              tocRef.current.getBoundingClientRect().top,
            end:
              toc.getBoundingClientRect().bottom -
              tocRef.current.getBoundingClientRect().top,
            display: true,
          }));

          setActiveId("#" + elmId);
        }
      });

      document.querySelectorAll("h2[id]").forEach((elm) => {
        const elmId = elm.getAttribute("id");

        if (isInViewport(elm)) {
          const toc = document.querySelector(`a[data-toc='#${elmId}']`);
          setPosition((old) => ({
            ...old,
            start:
              toc.getBoundingClientRect().top -
              tocRef.current.getBoundingClientRect().top,
            end:
              toc.getBoundingClientRect().bottom -
              tocRef.current.getBoundingClientRect().top,
            display: true,
          }));

          setActiveId("#" + elmId);
        }
      });
    }
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 500);
  }, [position.display]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const id = entry.target.getAttribute("id");

        if (id) {
          if (
            entry.intersectionRect.top > 0 ||
            entry.intersectionRect.bottom > 0
          ) {
            const element = document.querySelector(`a[data-toc='#${id}']`);

            if (element) {
              // getBoundingClientRect is relative to the viewport. To make sure
              // that the active line is correct, use the toc container as the
              // anchor to indicate the start and the end of the active line
              // relatively in the toc component.

              setPosition((old) => ({
                ...old,
                start:
                  element.getBoundingClientRect().top -
                  tocRef.current.getBoundingClientRect().top,
                end:
                  element.getBoundingClientRect().bottom -
                  tocRef.current.getBoundingClientRect().top,
                display: true,
              }));

              // This setState will update the new header id if and only if there
              // is an intersection happening. The new header id, including the
              // hashtag, will be stored whether it's before or after. This will
              // ensures style updates to happen there is a new header visible on
              // the view port.
              setActiveId("#" + entry.target.id);
            }
          }
        }
      },
      {
        // This will make sure the intersectioning is triggered if and only if
        // the header appears 90% on viewport, i.e. header will be nearly on the top of the screen.
        rootMargin: "0px 0px -90% 0px",
      }
    );

    document.querySelectorAll("h1[id]").forEach((elm) => {
      observer.observe(elm);
    });

    document.querySelectorAll("h2[id]").forEach((elm) => {
      observer.observe(elm);
    });

    return () => {
      document.querySelectorAll("h1[id]").forEach((elm) => {
        observer.unobserve(elm);
      });

      document.querySelectorAll("h2[id]").forEach((elm) => {
        observer.unobserve(elm);
      });
    };
  }, []);

  // There are some articles, usually short ones, that don't have a table of
  // contents.  The `toc` is still valid but the `items` is empty in that case.
  // Therefore, a check should do the work

  return typeof toc.items !== "undefined" ? (
    <StyledChapterNav id="toc" ref={tocRef} {...rest}>
      <h5>Table of Contents</h5>

      <StyledChapterActiveLine
        display
        className={mounted && "mounted"}
        start={position.start}
        end={position.end}
      >
        {(toc.items as ItemArrayProps).map((entry, i) => (
          <>
            <StyledChapterItem
              key={i}
              className={`${activeId === entry.url ? "active" : ""}`}
            >
              <Link data-toc={entry.url} to={entry.url}>
                {entry.title}
              </Link>
            </StyledChapterItem>

            {entry.items &&
              entry.items.map((item, j) => (
                <StyledChapterItem
                  key={j}
                  className={`${activeId === item.url ? "active" : ""} sub`}
                >
                  <Link data-toc={item.url} to={item.url}>
                    {item.title}
                  </Link>
                </StyledChapterItem>
              ))}
          </>
        ))}
      </StyledChapterActiveLine>
    </StyledChapterNav>
  ) : null;
};

export default TOC;
