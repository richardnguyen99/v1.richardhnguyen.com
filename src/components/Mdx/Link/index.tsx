import * as React from "react";
import clsx from "classnames";
import { Link as GatsbyLink } from "gatsby";
import { CrossReferenceIcon } from "@primer/octicons-react";

export type LinkProps = {
  href: string;
  type: string;
};

export type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLAnchorElement> & LinkProps
>;

const Link: React.FC<Props> = ({ href, type, children, ...rest }) => {
  const Content = () => {
    return type === "code" ? (
      <code className="mdx-code flex items-center">
        <span>{children}</span>
        <CrossReferenceIcon size={16} />
      </code>
    ) : (
      <>
        {children}
        <CrossReferenceIcon size={16} />
      </>
    );
  };

  if (href[0] === "/")
    return (
      <GatsbyLink
        className={clsx("mdx-link", {
          code: type === "code",
        })}
        to={href}
        {...rest}
      >
        <Content />
      </GatsbyLink>
    );

  return (
    <a
      href={href}
      className={clsx("mdx-link", {
        code: type === "code",
      })}
    >
      <Content />
    </a>
  );
};

export default Link;
