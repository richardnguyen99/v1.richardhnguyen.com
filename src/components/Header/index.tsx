import * as React from "react";

export type Props = React.PropsWithChildren<object>;

const Header: React.FC<Props> = ({ children }) => {
  return (
    <header
      id="global-header"
      className="w-full fixed z-10 bg-zinc-50 dark:bg-zinc-900 border-b"
    >
      <div
        id="header-container"
        className="mx-auto box-content max-w-2xl md:max-w-3xl xl:max-w-6xl p-10"
      >
        <nav id="header-flex" className="flex items-center h-full">
          {children}
        </nav>
      </div>
    </header>
  );
};

export default Header;
