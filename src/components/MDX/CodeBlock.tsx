/**
 * A React component to replace the original <pre > element with more styling
 * and functionality.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import lightTheme from "prism-react-renderer/themes/github";
import darkTheme from "prism-react-renderer/themes/vsDark";

import { CodeProps } from "./type";
import Terminal from "@components/Terminal/Terminal";
import { ThemeContext } from "@contexts/Theme";

const CodeBlock: React.FC<CodeProps> = ({
  rawCodeString,
  language,
  title = "",
  fontSize = 18,
  ...rest
}) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <Highlight
      {...defaultProps}
      code={rawCodeString}
      language={language as Language}
      theme={themeContext.theme === "dark" ? darkTheme : lightTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <Terminal title={title}>
            <pre
              data-prism-render="true"
              className={className}
              style={{ fontSize: `${fontSize}px`, ...style }}
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
          </Terminal>
        );
      }}
    </Highlight>
  );
};

export default CodeBlock;
