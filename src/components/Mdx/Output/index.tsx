import * as React from "react";
import clsx from "classnames";
import { Highlight, themes } from "prism-react-renderer";

import getFileType from "./getFileTypeIcon";

import { getLanguageExt } from "../util";
import ThemeContext from "@components/Theme/Context";
import CopyButton from "./CopyButton";
import DefaultFile from "@components/Icons/DefaultFile";
import("prismjs/components/prism-python");

interface RecursiveProps {
  children?:
    | React.ReactElement<RecursiveProps>
    | React.ReactElement<RecursiveProps>[];
}

export type CodeProps = {
  children:
    | React.ReactElement<RecursiveProps>
    | React.ReactElement<RecursiveProps>[];
  className: string;
  showLineNumber?: boolean;
  enableCopy?: boolean;
  showWindowBar?: boolean;
  tab?: number;
  hidden?: boolean;

  title?: string;
};

const Output: React.FC<CodeProps> = ({
  children,
  className: _className,
  showLineNumber = true,
  showWindowBar = true,
  title: _title,
  tab = 0,
}) => {
  const createCopyString = React.useCallback(
    (_children: typeof children, content: string[]) => {
      if (_children === undefined) return;

      console.log(_children);
      if (typeof _children === "string") {
        content.push(_children);
      } else if (React.isValidElement(_children)) {
        createCopyString(_children.props.children, content);
      } else {
        _children.forEach((child) => {
          createCopyString(child, content);
        });
      }
    },
    []
  );

  const copyString = React.useMemo(() => {
    const content: string[] = [];

    createCopyString(children, content);

    return content.join(" ");
  }, [children, createCopyString]);
  const OutputIcon = () => <DefaultFile />;

  return (
    <div
      className={clsx({
        "relative my-4 text-sm mt-4": true,
        "border rounded-md": tab === 0,
        "border-slate-300 dark:border-gray-700": tab === 0,
        "bg-neutral-100 dark:bg-[#0B1416]": tab === 0,
      })}
      aria-describedby="terminal"
    >
      {showWindowBar && tab === 0 && (
        <div
          aria-describedby="header-terminal"
          className={clsx({
            "flex items-center justify-between": true,
            "px-3 py-2": true,
            "border-b  rounded-tl-md rounded-tr-md": tab === 0,
            "border-slate-300 dark:border-gray-700": tab === 0,
            "bg-gray-100 dark:bg-[#0D1618]": tab === 0,
          })}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center flex-shrink-0 w-5 ">
              <OutputIcon />
            </div>
            <div>Output</div>
          </div>
          <div>
            <CopyButton content={copyString} />
          </div>
        </div>
      )}
      <div aria-describedby="output-terminal" className="py-4 overflow-x-auto">
        <div
          className={clsx({
            "font-mono": true,
            "text-left": true,
            "break-normal": true,
            "[&_>_p]:!mt-0": true,
            "[&_>_p]:!pl-3": true,
            show: showLineNumber,
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Output;
