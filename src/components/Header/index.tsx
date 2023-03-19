import * as React from "react";

import Brand from "@components/Animated/Brand";

export type Props = React.PropsWithChildren<object>;

const Header: React.FC<Props> = ({ children }) => {
  return (
    <header
      id="global-header"
      className="w-full fixed z-10 bg-zinc-50 dark:bg-zinc-900 border-b"
    >
      <div
        id="header-container"
        className="mx-auto box-content max-w-2xl md:max-w-3xl xl:max-w-6xl py-4 px-10"
      >
        <nav id="header-flex" className="flex items-center h-full">
          <Brand />
        </nav>
      </div>
    </header>
  );
};

export default Header;
