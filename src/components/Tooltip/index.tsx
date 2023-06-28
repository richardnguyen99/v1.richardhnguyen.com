import React, { useRef, useState } from "react";
import clsx from "classnames";
import { Transition } from "@headlessui/react";
import { Placement } from "@popperjs/core";
import { usePopper } from "react-popper";

export interface TooltipProps {
  message: string;
  placement?: Placement;
}

export type Props = React.PropsWithChildren<
  TooltipProps & React.HTMLAttributes<HTMLDivElement>
>;

/**
 * A small component that displays some brief message when hovering on the
 * triggering component.
 */
const Tooltip: React.FC<Props> = ({
  children,
  message,
  placement = "bottom-start",
  ...rest
}) => {
  const triggerRef = useRef(null);
  const popperElRef = useRef(null);
  const arrowRef = useRef(null);

  const [popperElement, setPopperElement] = useState(null);
  const [, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(triggerRef.current, popperElement, {
    modifiers: [
      { name: "arrow", options: { element: arrowRef.current, padding: 10 } },
      { name: "offset", options: { offset: [0, 8] } },
    ],
    placement,
  });

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div {...rest}>
      <div ref={triggerRef} onMouseEnter={openModal} onMouseLeave={closeModal}>
        {children}
      </div>

      {/** see https://github.com/tailwindlabs/headlessui/issues/154 for more
       * details on how React-Popper and HeadlessUI work together
       */}
      <div
        id="tooltip"
        ref={popperElRef}
        style={styles.popper}
        {...attributes.popper}
        className="absolute z-[1002]"
      >
        <Transition
          show={isOpen}
          beforeEnter={() => {
            setPopperElement(popperElRef.current);
            setArrowElement(arrowRef.current);
          }}
          afterLeave={() => {
            setPopperElement(null);
            setArrowElement(null);
          }}
          enter="transition-transform ease-out"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition-transform ease-in"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          unmount={false}
        >
          <div
            className={clsx("", {
              "inline-block items-center justify-center": true,
              "whitespace-nowrap text-xs font-bold": true,
              "rounded-lg p-1.5  border": true,
              "bg-zinc-300 dark:bg-zinc-800 ": true,
              "border-zinc-400/50 dark:border-zinc-600 ": true,
              "shadow-zinc-800 dark:shadow-zinc-800/60": true,
            })}
          >
            {message}

            {/**
             * Style for arrow doesn't come with PopperJS. See src/index.css
             * For general styles, see https://popper.js.org/docs/v2/tutorial/#arrow
             */}
            <div
              id="arrow"
              ref={arrowRef}
              style={styles.arrow}
              {...attributes.arrow}
            />
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default Tooltip;
