import * as React from "react";
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
      className="inline-block relative p-5 font-semibold text-lg leading-6 text-zinc-50 hover:text-indigo-500"
    >
      <div>{name}</div>
    </Link>
  );
};

export default Item;
