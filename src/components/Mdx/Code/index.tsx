import * as React from "react";
import clsx from "classnames";
import { Highlight, themes } from "prism-react-renderer";

import getFileType from "./getFileTypeIcon";

import { getLanguageExt } from "../util";

export type CodeProps = {
  codeString: string;
  className: string;
  showLineNumber?: boolean;

  title?: string;
};

const Code: React.FC<CodeProps> = ({
  codeString,
  className: _className,
  showLineNumber = true,
  title: _title,
}) => {
  const id = React.useId();
  const extension = getLanguageExt(_className);
  const FileTypeIcon = getFileType(extension);

  return (
    <Highlight theme={themes.dracula} code={codeString} language={extension}>
      {({ className, tokens, getTokenProps, getLineProps }) => (
        <div
          id={id}
          className="relative my-4 border border-gray-600 rounded-md text-sm"
          aria-describedby="code"
        >
          <div
            aria-describedby="code-header"
            className="flex items-center gap-2 px-3 py-2 rounded-tl-md rounded-tr-md border-b border-gray-600 dark:bg-[#0D1618]"
          >
            <div className="flex items-center flex-shrink-0 w-5 ">
              <FileTypeIcon />
            </div>
            <div>{_title}</div>
          </div>
          <pre aria-describedby="code-pre" className="my-3">
            <code
              className={clsx({
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
