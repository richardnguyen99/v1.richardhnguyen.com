import * as React from "react";
import { Highlight, themes } from "prism-react-renderer";

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

  React.useEffect(() => {
    console.log(_className);
  }, []);

  return (
    <Highlight
      theme={themes.dracula}
      code={codeString}
      language={getLanguageExt(_className)}
    >
      {({ className, tokens, getTokenProps, getLineProps }) => (
        <div
          id={id}
          className="relative border border-gray-400 text-sm"
          aria-describedby="code"
        >
          <div aria-describedby="code-header">{_title}</div>
          <pre aria-describedby="code-pre">
            <code>
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i });

                return (
                  <div key={i} {...lineProps}>
                    {showLineNumber && (
                      <span className="inline-block w-8 text-right ml-1 mr-3 opacity-40">
                        {i + 1}
                      </span>
                    )}
                    {line.map((token, key) => (
                      <span key={i} {...getTokenProps({ token, key })} />
                    ))}
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
