import * as React from "react";
import clsx from "classnames";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@primer/octicons-react";

import type { CalloutProps } from "./types";

type Props = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

const Callout: React.FC<CalloutProps & Props> = ({
  children,
  title,
  type,
  collapsible = false,
  ...rest
}) => {
  const [loaded, setLoaded] = React.useState(false);

  const transitionRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const contentHeight = React.useMemo(() => {
    if (!loaded) return 0;

    return contentRef.current.getBoundingClientRect().height + 40;
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
        "border-sky-500": true,
        "transition-transform duration-300": true,
      })}
    >
      {({ open }) => (
        <>
          <div
            className={clsx("group flex w-full items-center gap-3 mt-8", {
              "rounded-lg py-2 text-left text-sm font-extrabold": true,
            })}
          >
            <span
              className={clsx("text-3xl", {
                "text-sky-500": !collapsible,
                "text-sky-400 group-hover:text-sky-500": true,
              })}
            >
              {title}
            </span>

            {collapsible && (
              <Disclosure.Button>
                <ChevronUpIcon
                  className={clsx("h-5 w-5 text-sky-500", {
                    "transition-transform duration-200": true,
                    "rotate-180 transform": open,
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
            <Disclosure.Panel ref={contentRef} className="py-2" static>
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Callout;
