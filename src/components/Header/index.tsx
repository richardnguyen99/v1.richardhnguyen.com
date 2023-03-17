import * as React from "react";

export type Props = React.PropsWithChildren<object>;

const Header: React.FC<Props> = ({ children }) => {
  return (
    <header className="w-full fixed z-10 bg-zinc-50 dark:bg-zinc-900 border-b">
      {children}
    </header>
  );
};

export default Header;
