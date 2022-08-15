/**
 * A React component to replace the original <pre > element with more styling
 * and functionality.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import lightTheme from "prism-react-renderer/themes/github";

import { CodeProps } from "./type";
import Terminal from "@components/Terminal/Terminal";

const CodeBlock: React.FC<CodeProps> = ({
  rawCodeString,
  language,
  title,
  ...rest
}) => {
  return (
    <Highlight
      {...defaultProps}
      code={rawCodeString}
      language={language as Language}
      theme={lightTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        console.log(tokens);

        return (
          <pre
            data-prism-render="true"
            className={className}
            style={style}
            {...rest}
          >
            {tokens.map((line, lineNumber) => (
              <div
                key={lineNumber}
                {...getLineProps({ line, key: lineNumber })}
              >
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        );
      }}
    </Highlight>
  );
};

export default CodeBlock;
