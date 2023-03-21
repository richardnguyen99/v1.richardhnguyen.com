import { Transition } from "@headlessui/react";
import { Placement } from "@popperjs/core";
import React, { useRef, useState } from "react";
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
    <div>
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
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          unmount={false}
        >
          <div className="inline-block whitespace-nowrap items-center justify-center rounded-lg p-1.5 text-xs font-bold border dark:bg-zinc-800 dark:border-zinc-600 dark:shadow-zinc-800/60">
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
