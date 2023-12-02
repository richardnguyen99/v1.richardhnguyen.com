import * as React from "react";
import clsx from "classnames";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@primer/octicons-react";

import type { CalloutProps } from "./types";
import CalloutIcon from "./Icon";

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

    const height = contentRef.current.getBoundingClientRect().height;

    transitionRef.current.style.setProperty("display", "block");
    transitionRef.current.style.setProperty("max-height", `${height}px`);

    return height + 48;
  }, [loaded]);

  const afterEnterHanlder = React.useCallback(() => {
    if (transitionRef === null || transitionRef.current === null) return;

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
        "border border-transparent": true,
        "border-l-4": true,
        "transition-[transform,_border] duration-200": true,

        "bg-sky-400/20": type === "info" || type === "default",
        "dark:bg-sky-900/30": type === "info" || type === "default",
        "border-l-sky-500 hover:border-sky-500":
          type === "info" || type === "default",

        "bg-amber-400/20": type === "warning",
        "dark:bg-amber-500/10": type === "warning",
        "border-l-amber-500 hover:border-amber-500": type === "warning",

        "bg-rose-400/20": type === "danger",
        "dark:bg-rose-500/10": type === "danger",
        "border-l-rose-500 hover:border-rose-500": type === "danger",

        "bg-lime-400/20": type === "success",
        "dark:bg-lime-500/10": type === "success",
        "border-l-lime-500 hover:border-lime-500": type === "success",
      })}
    >
      {({ open }) => (
        <>
          <div
            className={clsx("absolute top-0 left-0 p-2 rounded-[50%]", {
              "transition-colors duration-300": true,
              "bg-slate-50 dark:bg-[#0B1416]": true,
              "translate-x-[calc(-50%-1.5px)] -translate-y-1/2": true,
            })}
          >
            <CalloutIcon type={type} />
          </div>
          <div
            className={clsx("group flex w-full items-center gap-3 mt-6", {
              "rounded-lg py-4 text-left text-sm font-extrabold": true,
            })}
          >
            <span
              className={clsx("text-xl", {
                "text-sky-500":
                  !collapsible && (type === "info" || type === "default"),
                "text-sky-400 group-hover:text-sky-500":
                  type === "info" || type === "default",

                "text-amber-500": !collapsible && type === "warning",
                "text-amber-400 group-hover:text-amber-500": type === "warning",

                "text-rose-500": !collapsible && type === "danger",
                "text-rose-400 group-hover:text-rose-500": type === "danger",

                "text-lime-500": !collapsible && type === "success",
                "text-lime-400 group-hover:text-lime-500": type === "success",
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
                    "text-sky-500": type === "info" || type === "default",
                    "text-amber-500": type === "warning",
                    "text-rose-500": type === "danger",
                    "text-lime-500": type === "success",
                  })}
                />
              </Disclosure.Button>
            )}
          </div>
          <Transition
            hidden={false}
            ref={transitionRef}
            show={open}
            unmount={false}
            className="transition-all overflow-y-clip pr-6"
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
              className={`mdx-callout mdx--${type}`}
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
