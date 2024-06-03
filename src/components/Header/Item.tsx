import * as React from "react";
import clsx from "classnames";
import { Link } from "gatsby";

type Internal = {
  name: string;
  to: string;
};

export type Props = React.PropsWithChildren<
  Internal & React.HTMLAttributes<HTMLAnchorElement>
>;

/**
 * Header Item is a part of the Header component.
 *
 * This component defines a layout for the items in the header component and
 * holds an URL for the associative page. It uses Gatsby Link under the hood.
 * Thus, only use this for internal links handled by Gatsby.
 *
 * @param `props` Name to display and To to navigate.
 * @returns React.FC
 */
const Item: React.FC<Props> = ({ name, to }) => {
  return (
    <Link
      to={to}
      className={clsx("", {
        "inline-block relative": true,
        "p-5 font-semibold text-base leading-6": true,
        "text-zinc-800 dark:text-zinc-50": true,
        "hover:text-sky-600 dark:hover:text-sky-500": true,
      })}
      activeClassName="dark:text-sky-500"
    >
      <div>{name}</div>
    </Link>
  );
};

export default Item;
