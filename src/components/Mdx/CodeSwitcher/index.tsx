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
          "flex flex-col": true,
          "relative my-4 text-sm mt-8": true,
          "border rounded-md": true,
          "border-slate-300 dark:border-gray-700": true,
          "bg-neutral-100 dark:bg-[#0B1416]": true,
          "max-h-[var(--max-height)]": maxHeight !== undefined,
        })}
      >
        <div
          className={clsx({
            "relative p-2 pb-0": true,
            "rounded-tl-md rounded-tr-md": true,
            "border-b border-slate-300 dark:border-gray-700": true,
            "flex justify-between": true,
            "bg-neutral-200 dark:bg-[rgb(21,30,32)]": true,
          })}
        >
          <div
            aria-describedby="code-header"
            style={
              {
                "--max-tabs": childrenArray.length,
              } as React.CSSProperties
            }
            className={clsx({
              flex: true,
              "w-[calc(100%-3rem)]": true,
              "relative z-10": true,
            })}
          >
            {childrenPropsMemo.map((child, index) => {
              const extension = getLanguageExt(child.className);
              const FileTypeIcon = getFileType(extension);

              const titleArray = child.title.split(".");
              const title =
                titleArray.length > 1
                  ? titleArray.slice(0, -1).join(".")
                  : titleArray[0];
              const formattedExtension =
                titleArray.length > 1
                  ? `.${titleArray[titleArray.length - 1]}`
                  : "";

              return (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className={clsx("", {
                    "flex items-center relative": true,
                    "max-w-[100px] w-[calc(1/var(--max-tabs)*100%)]": true,
                    "-mb-[1px]": true,
                    "px-3 py-2": true,
                    "border-t border-l border-r": true,
                    "rounded-tl-lg rounded-tr-lg": true,
                    "border-b": active !== index,
                    "border-slate-300 dark:border-gray-700": true,
                    "bg-gray-100 dark:bg-[rgb(11,20,22)]": active === index,
                    "bg-gray-200 dark:bg-[rgb(16,25,27)]": active !== index,
                    "hover:cursor-pointer": true,
                  })}
                >
                  <div className="flex items-center flex-shrink-0 w-5 ">
                    <FileTypeIcon />
                  </div>
                  <div className="overflow-hidden text-ellipsis">{title}</div>
                  <div>{formattedExtension}</div>
                </div>
              );
            })}
          </div>
          <div className="absolute top-0 right-0 z-50 w-5 dark:bg-[rgb(21,30,32)] h-full flex items-center justify-end rounded-tr-md">
            <div className="mr-2">
              <CopyButton content={childrenPropsMemo[active].children} />
            </div>
          </div>
        </div>
        <div
          className={clsx({
            "h-full": true,
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
