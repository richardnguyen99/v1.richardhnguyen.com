import * as React from "react";
import clsx from "classnames";

import Footer from "@components/Footer";
import Header from "@components/Header";

export type Props<T = object> = React.PropsWithChildren<
  T & React.HTMLAttributes<HTMLDivElement>
>;

const RootLayout: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <main
      {...rest}
      id="root-layout"
      className={clsx({
        "text-zinc-900 dark:text-gray-50": true,
        "bg-slate-50 dark:bg-[#0B1416]": true,
        "transition-colors duration-300": true,
      })}
    >
      <Header />
      <div className="pt-16">{children}</div>
      <Footer />
    </main>
  );
};

export default RootLayout;
