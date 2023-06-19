import type { PreProps } from "./types";

export const getLanguageExt = (className: string) => {
  return className.split("language-").pop();
};

export const preparePreProps = (preProps: PreProps) => {
  if (preProps.children.type !== "code") return undefined;

  const {
    children,
    className = "",
    showLineNumber,
    enableCopy,
    ...props
  } = preProps.children.props;
  const match = className.match(/language-([\0-\uFFFF]*)/);

  return {
    codeString: children.trim(),
    className,
    language: match !== null ? match[1] : "",
    showLineNumber: showLineNumber === "false" ? false : true,
    enableCopy: enableCopy === "false" ? false : true,
    ...props,
  };
};
