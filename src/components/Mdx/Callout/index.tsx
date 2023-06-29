import * as React from "react";
import clsx from "classnames";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@primer/octicons-react";

import type { CalloutProps } from "./types";

type Props = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

const Callout: React.FC<CalloutProps & Props> = ({
  children,
  title,
  type = "info",
  collapsible = false,
  ...rest
}) => {
  const [loaded, setLoaded] = React.useState(false);

  const transitionRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const contentHeight = React.useMemo(() => {
    if (!loaded) return 0;

    return contentRef.current.getBoundingClientRect().height + 48;
  }, [loaded]);

  const afterEnterHanlder = React.useCallback(() => {
    if (transitionRef === null || transitionRef.current === null) return;

    transitionRef.current.style.setProperty("display", "block");
    transitionRef.current.style.setProperty("max-height", `${contentHeight}px`);
  }, [contentHeight]);

  const beforeLeaveHanlder = React.useCallback(() => {
    if (transitionRef === null || transitionRef.current === null) return;

    transitionRef.current.style.setProperty("max-height", "0px");
  }, []);

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Disclosure
      {...rest}
      as="div"
      defaultOpen
      className={clsx("relative", {
        "mt-8 -ml-6 pl-6 rounded-md": true,
        "border-l-4": true,
        "transition-transform duration-300": true,

        "bg-sky-400/20": type === "info",
        "dark:bg-sky-500/40": type === "info",
        "border-sky-500": type === "info",

        "bg-orange-400/20": type === "warning",
        "dark:bg-orange-500/10": type === "warning",
        "border-orange-500": type === "warning",
      })}
    >
      {({ open }) => (
        <>
          <div
            className={clsx("group flex w-full items-center gap-3 mt-8", {
              "rounded-lg py-4 text-left text-sm font-extrabold": true,
            })}
          >
            <span
              className={clsx("text-xl", {
                "text-sky-500": !collapsible && type === "info",
                "text-sky-400 group-hover:text-sky-500": type === "info",

                "text-orange-500": !collapsible && type === "warning",
                "text-orange-400 group-hover:text-orange-500":
                  type === "warning",
              })}
            >
              {title}
            </span>

            {collapsible && (
              <Disclosure.Button>
                <ChevronUpIcon
                  className={clsx("h-5 w-5", {
                    "transition-transform duration-200": true,
                    "rotate-180 transform": open,

                    "text-sky-500": type === "info",

                    "text-orange-500": type === "warning",
                  })}
                />
              </Disclosure.Button>
            )}
          </div>
          <Transition
            ref={transitionRef}
            show={open}
            unmount={false}
            className="transition-all overflow-y-clip"
            afterEnter={afterEnterHanlder}
            enter="transition transition-[max-height]"
            enterFrom="transform max-h-0"
            enterTo="transform"
            beforeLeave={beforeLeaveHanlder}
            leave="transition transition-[max-height] duration-200 ease-out"
            leaveFrom="transform"
            leaveTo="transform max-h-0"
          >
            <Disclosure.Panel
              ref={contentRef}
              className="py-4 [&>*:first-child]:!mt-0"
              static
            >
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Callout;
