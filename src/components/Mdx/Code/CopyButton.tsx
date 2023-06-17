import * as React from "react";
import clsx from "classnames";
import { CheckIcon, CopyIcon } from "@primer/octicons-react";

export type CopyButtonProps = {
  content: string;
};

type Props = React.HTMLAttributes<HTMLButtonElement> & CopyButtonProps;

const CopyButton: React.FC<Props> = ({ content, ...rest }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyTextToClipboard = async (text: string) => {
    if ("clipboard" in navigator)
      return await navigator.clipboard.writeText(text);

    return document.execCommand("copy", true, text);
  };

  const handleCopyClick = React.useCallback(() => {
    if (isCopied) return;

    copyTextToClipboard(content)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        throw Error(err);
      });
  }, [content, isCopied]);

  return (
    <button
      {...rest}
      type="button"
      className={clsx("group rounded-lg dark:hover:bg-[#1E2729]", {
        "relative w-8 h-8": true,
        "flex items-center justify-center": true,
        show: isCopied,
      })}
      onClick={handleCopyClick}
    >
      <CopyIcon
        size={16}
        className="w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-50 group-[:not(.show)]:opacity-100 group-[:not(.show)]:scale-100 transition-all ease-in-out duration-500"
      />
      <CheckIcon
        size={16}
        className="w-4 h-4 absolute fill-green-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-50 group-[.show]:opacity-100 group-[.show]:scale-100 transition-all ease-in-out duration-500"
      />
    </button>
  );
};

export default CopyButton;
