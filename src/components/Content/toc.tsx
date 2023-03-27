import * as React from "react";

export type TOCProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLElement> & {
    toc: string;
  }
>;

const Toc: React.FC<TOCProps> = ({ toc, ...rest }) => {
  const tocRef = React.useRef(null);

  // Check if there is any heading visible on the screen on the first load. If yes, then highlight the corresponding TOC link. Use React.useEffect to make sure this is executed only once.
  React.useEffect(() => {
    const elements = document.querySelectorAll(
      "#content h1[id], #content h2[id]"
    );
    const tocElements = document.querySelectorAll("#toc a");

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const tocElement = tocElements[i];

      if (element.getBoundingClientRect().top < 0) {
        if (tocElement) {
          tocElement.classList.remove("active");
        }
      } else {
        if (tocElement) {
          tocElement.classList.add("active");
        }
        break;
      }
    }
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        let id = entry.target.getAttribute("id");
        id = id[0].toLowerCase() + id.slice(1);

        if (id) {
          if (
            entry.intersectionRect.top > 0 ||
            entry.intersectionRect.bottom > 0
          ) {
            const element = document.querySelector(`#toc a[href='#${id}']`);
            const elements = document.querySelectorAll("#toc a");

            if (element) {
              elements.forEach((elm) => {
                elm.classList.remove("active");
              });

              element.classList.add("active");
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

    document.querySelectorAll("#content h1[id]").forEach((elm) => {
      observer.observe(elm);
    });

    document.querySelectorAll("#content h2[id]").forEach((elm) => {
      observer.observe(elm);
    });

    return () => {
      document.querySelectorAll("#content h1[id]").forEach((elm) => {
        observer.unobserve(elm);
      });

      document.querySelectorAll("#content h2[id]").forEach((elm) => {
        observer.unobserve(elm);
      });
    };
  }, []);

  return (
    <div {...rest} ref={tocRef}>
      <h1 className="mt-6 mb-6 font-bold text-lg">On this page</h1>
      <div dangerouslySetInnerHTML={{ __html: toc }}></div>
    </div>
  );
};

export default Toc;
