import * as React from "react";
import clsx from "classnames";
import { Link } from "gatsby";

export type DropdownItemProps = {
  url: string;
  active: boolean;
};

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLLIElement> & DropdownItemProps
>;

const DropdownItem: React.FC<Props> = ({
  url,
  children,
  className = "",
  ...rest
}) => {
  return (
    <li
      {...rest}
      className={clsx("dark:text-white dark:hover:text-sky-500", {
        "flex items-center": true,
        "p-4 rounded-lg": true,
        "dark:hover:bg-zinc-700/25": true,
        [className as string]: className,
      })}
    >
      <Link
        to={url}
        activeClassName={clsx({
          "font-extrabold": true,
          "dark:text-sky-500 dark:hover:text-sky-600": true,
        })}
      >
        {children}
      </Link>
    </li>
  );
};

export default DropdownItem;
