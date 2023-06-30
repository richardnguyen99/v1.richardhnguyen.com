import * as React from "react";
import { Link } from "gatsby";

import type { LinkProps } from "./type";

type Props = React.PropsWithChildren<React.HTMLAttributes<HTMLAnchorElement>>;

const ArrowLink: React.FC<Props & LinkProps> = ({
  native,
  href,
  children,
  ...rest
}) => {
  const AnchorLink = () => (
    <a {...rest} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );

  const NativeLink = () => (
    <Link {...rest} to={href}>
      {children}
    </Link>
  );

  return native ? <NativeLink /> : <AnchorLink />;
};

export default ArrowLink;
