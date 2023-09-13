import * as React from "react";
import clsx from "classnames";
import getFileType from "../Code/getFileTypeIcon";
import { getLanguageExt } from "../util";

interface CodeSwitcherProps {
  children: React.ReactNode | React.ReactNode[];
}

type Props = CodeSwitcherProps;

const CodeSwitcher: React.FC<Props> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  const [active, setActive] = React.useState(0);

  const childrenMemo = React.useMemo(() => {}, [childrenArray]);

  React.useEffect(() => {
    console.log(childrenArray[active]);
  }, [active, childrenArray]);

  return (
    <div className="code-switcher">
      <div
        className={clsx({
          "relative my-4 text-sm mt-8": true,
          "border rounded-md": true,
          "border-slate-300 dark:border-gray-700": true,
          "bg-neutral-100 dark:bg-[#0B1416]": true,
        })}
      >
        <div
          aria-describedby="code-header"
          className={clsx({
            "flex items-center justify-between": true,
            "px-3 py-2": true,
            "border-b  rounded-tl-md rounded-tr-md": true,
            "border-slate-300 dark:border-gray-700": true,
            "bg-gray-100 dark:bg-[#0D1618]": true,
          })}
        ></div>
        {childrenArray[active]}
      </div>
    </div>
  );
};

export default CodeSwitcher;
