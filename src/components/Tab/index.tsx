import * as React from "react";
import clsx from "classnames";
import { Transition } from "@headlessui/react";
import * as RadixTabs from "@radix-ui/react-tabs";

import type { TabsProps } from "./type";

const TabsRefFunction: React.ForwardRefRenderFunction<
  HTMLDivElement,
  TabsProps
> = (props, forwaredRef) => {
  const { tabs, defaultValue = "", ...rest } = props;

  const ref = React.useRef<HTMLDivElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);
  const triggerRefs = React.useRef<HTMLElement[]>([]);

  // Control state when the user hovers over the tabs
  const [tabHover, setTabHover] = React.useState(false);

  // Control the direction for the sliding effect when hovering between tabs
  const [hoveredTab, setHoveredTab] = React.useState({
    current: -1,
    previous: -1,
  });
  const [selectedTabRect, setSelectedTabRect] = React.useState({
    mounted: false,
    width: 0,
    left: 0,
  });

  /**
   * Controls when the user hovers over the tabs. Animation for entering the
   * tabs is just blur effect, and is controlled by the `tabHover` state.
   */
  const handlePointerEnter = (_event: React.PointerEvent<HTMLDivElement>) => {
    setTabHover(true);
  };

  /**
   * Controls and resets the tab hover state when the user leaves the tabs.
   * Animation for leaving the tabs is just blur effect, and is controlled by
   * the `tabHover` state.
   */
  const handlePointerLeave = (_event: React.PointerEvent<HTMLDivElement>) => {
    setTabHover(false);
    setHoveredTab({
      current: -1,
      previous: -1,
    });
  };

  /**
   * Controls when the user hovers between tabs while the `tabHover` state is
   * already active. Animation for hovering between tabs is sliding effect and
   * is controlled by the `hoveredTab` state.
   */
  const handleTabMouseEnter = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
      if (tabHover) {
        setHoveredTab((prev) => ({ previous: prev.current, current: index }));
        return;
      }

      setHoveredTab((prev) => ({
        ...prev,
        current: index,
      }));
    },
    [tabHover]
  );

  /**
   * Controls the sliding bar effect when the user clicks on the tabs.
   */
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
      const listContainerRef = listRef.current;
      const triggerRef = triggerRefs.current[index];

      if (!listContainerRef || !triggerRef) return;

      // The purpose of this code is to compute the correct width and left for
      // the sliding bar in every screen size. The tab itself is a flex,
      // overflow-scroll container.

      let left = 0;
      const triggerRect = (
        triggerRef.firstChild.lastChild as HTMLElement
      ).getBoundingClientRect();

      // Subtract the width of the tab from the left side of the tab container
      for (let i = 0; i < index; i++) {
        const tabRect = triggerRefs.current[i].getBoundingClientRect();
        left += tabRect.width;
      }

      left += 8; // Adding the padding value to make the bar center

      setSelectedTabRect({
        mounted: true,
        width: triggerRect.width,
        left,
      });
    },
    []
  );

  // Initialize the style of the default selected tab in the initial render
  React.useEffect(() => {
    let refIdx: number;

    refIdx = tabs.findIndex((tab) => tab.value === defaultValue);

    if (refIdx === -1) refIdx = 0;

    const selectedTab = triggerRefs.current[refIdx].firstChild
      .lastChild as HTMLElement;
    const tabRect = ref.current.getBoundingClientRect();
    const listRect = selectedTab.getBoundingClientRect();

    const width = listRect.width + 6;

    setSelectedTabRect({
      mounted: true,
      width,
      left: listRect.left - tabRect.left,
    });
  }, [defaultValue, forwaredRef, tabs]);

  return (
    <RadixTabs.Root
      ref={(el) => {
        ref.current = el;

        if (typeof forwaredRef === "function") {
          forwaredRef(el);
        } else if (forwaredRef) {
          forwaredRef.current = el;
        }
      }}
      {...rest}
      defaultValue={defaultValue || tabs[0].value}
      className="relative"
    >
      <RadixTabs.List
        className={clsx(
          "relative overflow-x-auto [scrollbar-width:_none]",
          "pb-0.5 mb-5",
          "border-b-[1px]",
          "border-gray-300 dark:border-gray-700"
        )}
      >
        {/* Tabs */}
        <div
          ref={listRef}
          className={clsx("sticky flex items-center w-fit")}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          {tabs.map((tab, index) => (
            <RadixTabs.Trigger
              ref={(el) => (triggerRefs.current[index] = el)}
              key={`${tab.displayName}${index}`}
              value={tab.value}
              onMouseEnter={(e) => handleTabMouseEnter(e, index)}
              onClick={(e) => handleClick(e, index)}
              className="relative"
            >
              <div
                className={clsx(
                  "relative flex items-center flex-nowrap",
                  "px-2 py-1.5",
                  "select-none"
                )}
              >
                <Transition.Root show={hoveredTab.current === index}>
                  <Transition.Child
                    as="div"
                    className={clsx(
                      "[contain:_strict] absolute -z-[1] rounded-md",
                      "top-0 left-0 right-0 h-8",
                      "bg-gray-200 dark:bg-gray-800"
                    )}
                    enter="transition-[opacity,transform] duration-200"
                    enterFrom={clsx("opacity-0", {
                      "-translate-x-1/2":
                        tabHover &&
                        hoveredTab.current === index &&
                        hoveredTab.previous < index,
                      "translate-x-1/2":
                        tabHover &&
                        hoveredTab.current === index &&
                        hoveredTab.previous > index,
                    })}
                    enterTo="opacity-100 translate-x-0"
                    leave="transition-[opacity,transform] duration-200"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo={clsx("opacity-0", {
                      "translate-x-1/2":
                        tabHover &&
                        hoveredTab.previous === index &&
                        hoveredTab.current > index,
                      "-translate-x-1/2":
                        tabHover &&
                        hoveredTab.previous === index &&
                        hoveredTab.current < index,
                    })}
                  />
                </Transition.Root>

                <div
                  className={clsx(
                    "relative text-ellipsis overflow-clip whitespace-nowrap",
                    {
                      "inline-block": typeof tab.icon === "undefined",
                      "inline-flex items-center gap-2 [&>*]:shrink-0":
                        typeof tab.icon !== "undefined",
                    }
                  )}
                >
                  {tab.icon || null}
                  {tab.displayName}
                </div>
              </div>
            </RadixTabs.Trigger>
          ))}
        </div>

        <div
          style={
            {
              "--indicator-width": selectedTabRect.width + "px",
              "--indicator-left": selectedTabRect.left + "px",
            } as React.CSSProperties
          }
          className={clsx(
            "absolute h-1 bottom-0 bg-white",
            "w-[var(--indicator-width)] left-[var(--indicator-left)]",
            "transition-[width,left] duration-200 ease-in-out"
          )}
        />
      </RadixTabs.List>

      {tabs.map((tab, index) => (
        <RadixTabs.Content
          key={`content-${tab.displayName}${index}`}
          value={tab.value}
          className="relative"
        >
          {tab.children}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  );
};

const Tabs = React.forwardRef(TabsRefFunction);
Tabs.displayName = "Tabs";

export default Tabs;
