import * as React from "react";

import PageNavigator from "./PageNavigator";

export type Props = React.PropsWithChildren<object>;

/**
 * A standalone component that allows visitors to navigate to different pages.
 *
 * This component encapsulates all the links and functionalities so there is no
 * need to pass data or props to it. Everything is handled either by Gatsby or
 * through contexts.
 *
 * @returns React.FC
 */
const Header: React.FC<Props> = () => {
  return (
    <header
      id="global-header"
      className="w-full fixed z-10 bg-zinc-50 dark:bg-zinc-900 border-b border-gray-700"
    >
      <div
        id="header-container"
        className="mx-auto box-content max-w-2xl md:max-w-3xl xl:max-w-6xl px-10"
      >
        <nav id="header-flex" className="flex items-center h-full">
          <PageNavigator />
        </nav>
      </div>
    </header>
  );
};

export default Header;
