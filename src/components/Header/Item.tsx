import * as React from "react";
import { Link } from "gatsby";

type Internal = {
  name: string;
  to: string;
};

export type Props = React.PropsWithChildren<
  Internal & React.HTMLAttributes<HTMLAnchorElement>
>;

const Item: React.FC<Props> = ({ name, to }) => {
  return (
    <Link
      to={to}
      className="inline-block relative p-5 font-semibold text-lg leading-6 text-zinc-50 hover:text-sky-500"
    >
      <div>{name}</div>
    </Link>
  );
};

export default Item;
