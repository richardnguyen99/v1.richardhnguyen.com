import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@primer/octicons-react";
import { Link } from "gatsby";
import DropdownMenu from "./DropdownMenu";

export type DropdownProps = {
  opening: boolean;
  onClose: () => void;
};

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & DropdownProps
>;

const Dropdown: React.FC<Props> = ({ opening, onClose, ...rest }) => {
  const cancelButtonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Transition.Root show={opening} as={React.Fragment}>
      <Dialog
        {...rest}
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-2xl" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 -translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <Dialog.Panel className="w-full h-full transform overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-900/90 p-6 text-left align-middle shadow-2xl transition-all">
                <Dialog.Title
                  as="h1"
                  className="text-3xl font-black leading-6 text-gray-900 dark:text-white"
                >
                  <div className="flex items-center">
                    <p>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r to-sky-500 from-blue-600 mr-2">
                        Menu
                      </span>
                    </p>
                    <button
                      ref={cancelButtonRef}
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-2 py-2 text-sm font-medium hover:bg-gray-300  dark:hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ml-auto"
                      onClick={onClose}
                    >
                      <XIcon size={24} />
                    </button>
                  </div>
                </Dialog.Title>
                <hr className="my-4 h-[2px] bg-gray-300 border-0 dark:bg-slate-800" />

                <div>
                  <DropdownMenu />
                </div>

                <div className="mt-4"></div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Dropdown;
