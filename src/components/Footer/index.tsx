import * as React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="w-full mt-20 bg-gradient-to-b from-zinc-900 to-gray-900 transition-all"
    >
      <div
        id="footer-container"
        className="w-full mx-auto px-6 py-16 max-w-6xl"
      >
        <div id="footer-flex-container" className="flex flex-col">
          <div id="footer-column-container" className="grid gap-4 grid-cols-4">
            <div>
              <h2 className="font-semibold text-3xl leading-loose text-sky-400 dark:hover:text-sky-500 ">
                Categories
              </h2>
              <ul>
                <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                  Item
                </li>
                <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                  Item
                </li>
                <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                  Item
                </li>
                <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                  Item
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-3xl leading-loose text-sky-400 dark:hover:text-sky-500 ">
                Tags
              </h2>
              <ul>
                <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                  Item
                </li>
                <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                  Item
                </li>
                <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                  Item
                </li>
                <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                  Item
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-3xl leading-loose text-sky-400 dark:hover:text-sky-500 ">
                About
              </h2>
              <ul>
                <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                  Item
                </li>
                <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                  Item
                </li>
                <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                  Item
                </li>
                <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                  Item
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-3xl leading-loose text-sky-400 dark:hover:text-sky-500 ">
                Connect
              </h2>
              <ul>
                <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                  Item
                </li>
                <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                  Item
                </li>
                <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                  Item
                </li>
                <li className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white">
                  Item
                </li>
              </ul>
            </div>
          </div>
          <div id="footer-extra-info-container"></div>
        </div>
      </div>
      Footer
    </footer>
  );
};

export default Footer;
