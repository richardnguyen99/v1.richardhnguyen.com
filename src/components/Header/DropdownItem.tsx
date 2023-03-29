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
  active,
  children,
  className,
  ...rest
}) => {
  return (
    <li {...rest} className={clsx("dark:text-white")}>
      <Link to={url}>{children}</Link>
    </li>
  );
};

export default DropdownItem;
