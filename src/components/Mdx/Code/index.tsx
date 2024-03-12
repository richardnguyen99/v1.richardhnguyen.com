import * as React from "react";
import clsx from "classnames";
import { Highlight, themes } from "prism-react-renderer";

import getFileType from "./getFileTypeIcon";

import { getLanguageExt } from "../util";
import ThemeContext from "@components/Theme/Context";
import CopyButton from "./CopyButton";
import("prismjs/components/prism-python");

export type CodeProps = {
  codeString: string;
  className: string;
  showLineNumber?: boolean;
  enableCopy?: boolean;
  showWindowBar?: boolean;
  tab?: number;
  hidden?: boolean;

  title?: string;
};

const Code: React.FC<CodeProps> = ({
  codeString,
  className: _className,
  showLineNumber = true,
  showWindowBar = true,
  enableCopy = true,
  title: _title,
  tab = 0,
}) => {
  const themeContext = React.useContext(ThemeContext);

  const id = React.useId();

  const extension = getLanguageExt(_className);
  const FileTypeIcon = getFileType(extension);

  return (
    <Highlight
      theme={
        themeContext.theme === "light" ? themes.github : themes.oceanicNext
      }
      code={codeString}
      language={extension}
    >
      {({ className, tokens, getTokenProps, getLineProps }) => (
        <div
          id={`tab-${tab}-${id}`}
          className={clsx({
            "relative text-sm": true,
            "mt-0": tab !== 0,
            "border rounded-md ": tab === 0,
            "border-slate-300 dark:border-gray-700": tab === 0,
            "bg-neutral-100 dark:bg-[#0B1416]": tab === 0,
            "h-full": true,
          })}
          aria-describedby={`${extension}-code`}
        >
          {showWindowBar && tab === 0 && (
            <div
              aria-describedby="code-header"
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
                  <FileTypeIcon />
                </div>
                <div>{_title}</div>
              </div>
              {enableCopy && (
                <div>
                  <CopyButton content={codeString} />
                </div>
              )}
            </div>
          )}
          <pre
            aria-describedby="code-pre"
            className="py-4 overflow-y-auto h-full"
          >
            <code
              className={clsx({
                "text-left": true,
                "break-normal": true,
                show: showLineNumber,
              })}
            >
              {tokens.map((line, i) => {
                const lineProps = getLineProps({
                  line,
                  key: i,
                });

                return (
                  <div key={i} {...lineProps}>
                    {line.map((token, key) => {
                      return (
                        <span key={i} {...getTokenProps({ token, key })} />
                      );
                    })}
                  </div>
                );
              })}
            </code>
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default Code;
