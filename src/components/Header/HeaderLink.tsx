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
 * Header HeaderLink is a part of the Header component.
 *
 * This component defines a layout for the items in the header component and
 * holds an URL for the associative page. It uses Gatsby Link under the hood.
 * Thus, only use this for internal links handled by Gatsby.
 *
 * @param `props` Name to display and To to navigate.
 * @returns React.FC
 */
const HeaderLink: React.FC<Props> = ({ name, to }) => {
  return (
    <Link
      to={to}
      data-testid="header-link"
      className={clsx(
        "inline-block relative",
        "p-5 font-semibold text-lg leading-6",
        "hover:text-sky-600 dark:hover:text-sky-500"
      )}
      activeClassName="text-sky-500 dark:text-sky-400"
    >
      {name}
    </Link>
  );
};

export default HeaderLink;
