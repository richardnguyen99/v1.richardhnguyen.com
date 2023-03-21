import * as React from "react";
import clsx from "classnames";

export type ButtonProps = {
  variant?: string;
  size?: string;
};

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLButtonElement> & ButtonProps
>;

const Icon: React.FC<Props> = ({
  variant = "default",
  size = "base",
  children,
  onClick,
}) => {
  const isVariant = (v: string) => variant === v;

  const isSize = (s: string) => size === s;

  return (
    <button
      type="submit"
      onClick={onClick}
      className={clsx("rounded-lg inline-flex items-center justify-center", {
        "w-6 h-6 p-1": isSize("large"),
        "w-8 h-8 p-1.5": isSize("base"),
        "w-10 h-10 p-1.5": isSize("large"),
        "dark:hover:bg-zinc-100/25": isVariant("default"),
        "dark:hover:bg-blue-500/25": isVariant("primary"),
        "dark:hover:bg-teal-500/25": isVariant("success"),
        "dark:hover:bg-red-500/25": isVariant("danger"),
        "dark:hover:bg-yellow-500/25": isVariant("warning"),
      })}
    >
      {children}
    </button>
  );
};

export default Icon;
