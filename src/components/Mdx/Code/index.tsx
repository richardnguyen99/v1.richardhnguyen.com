import * as React from "react";

export type CodeProps = {
  codeString: string;
  className: string;

  title?: string;
};

const Code: React.FC<CodeProps> = ({
  codeString,
  className: _className,
  title: _title,
}) => {
  const id = React.useId();

  return (
    <div
      id={id}
      className="relative border border-gray-400"
      aria-describedby="code"
    >
      <div aria-describedby="code-header"></div>
      <pre aria-describedby="code-pre">{codeString}</pre>
    </div>
  );
};

export default Code;
