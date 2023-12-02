import * as React from "react";
import clsx from "classnames";
import getFileType from "../Code/getFileTypeIcon";
import { getLanguageExt } from "../util";
import CopyButton from "../Code/CopyButton";

interface CodeSwitcherProps {
  children: React.ReactNode | React.ReactNode[];
  maxHeight?: number;
}

interface ChildrenProps {
  children: string;
  className: string;
  tab: string;
  title: string;
}

type Props = CodeSwitcherProps;

const CodeSwitcher: React.FC<Props> = ({ children, maxHeight }) => {
  const childrenArray = React.Children.toArray(children);
  const [active, setActive] = React.useState(0);

  const childrenPropsMemo = React.useMemo<ChildrenProps[]>(() => {
    return childrenArray.map((child) => {
      const childProps = (child as React.ReactElement).props;

      const children = childProps.children as React.ReactElement;
      const props = children.props as ChildrenProps;

      return {
        children: props.children,
        className: props.className,
        tab: props.tab,
        title: props.title,
      };
    });
  }, [childrenArray]);

  return (
    <div className="code-switcher">
      <div
        style={
          { "--max-height": `${maxHeight ?? -1}px` } as React.CSSProperties
        }
        className={clsx({
          "relative my-4 text-sm mt-8": true,
          "border rounded-md": true,
          "border-slate-300 dark:border-gray-700": true,
          "bg-neutral-100 dark:bg-[#0B1416]": true,
          "max-h-[var(--max-height)]": maxHeight !== undefined,
        })}
      >
        <div
          className={clsx({
            "px-2 py-2": true,
            "rounded-tl-md rounded-tr-md": true,
            "border-b border-slate-300 dark:border-gray-700": true,
            "flex items-center justify-between": true,
            "bg-neutral-200 dark:bg-[rgb(21,30,32)]": true,
          })}
        >
          <div
            aria-describedby="code-header"
            className={clsx({
              "flex items-center": true,
              //"bg-gray-100 dark:bg-[#0D1618]": true,
            })}
          >
            {childrenPropsMemo.map((child, index) => {
              const extension = getLanguageExt(child.className);
              const FileTypeIcon = getFileType(extension);

              return (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className={clsx("", {
                    "flex items-center gap-2": true,
                    "-mb-[13px]": true,
                    "px-3 py-2": true,
                    "border-t border-l border-r rounded-tl-lg rounded-tr-lg":
                      true,
                    "border-b": active !== index,
                    "border-slate-300 dark:border-gray-700": true,
                    "bg-gray-100 dark:bg-[rgb(11,20,22)]": active === index,
                    "bg-gray-200 dark:bg-[rgb(16,25,27)]": active !== index,
                    "hover:cursor-pointer": true,
                  })}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex items-center flex-shrink-0 w-5 ">
                      <FileTypeIcon />
                    </div>
                    {child.title}
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <CopyButton content={childrenPropsMemo[active].children} />
          </div>
        </div>
        <div
          className={clsx({
            "h-[378px]": true,
            "overflow-y-auto": true,
            "scroll-m-1": true,
          })}
        >
          {childrenArray[active]}
        </div>
      </div>
    </div>
  );
};

export default CodeSwitcher;
