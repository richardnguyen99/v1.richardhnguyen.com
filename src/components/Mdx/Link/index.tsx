import * as React from "react";
import clsx from "classnames";
import { Link as GatsbyLink } from "gatsby";

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
      <code className="mdx-code">
        <span>{children}</span>
      </code>
    ) : (
      <>{children}</>
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
      target="_blank"
      rel="noreferrer"
      className={clsx("mdx-link", {
        code: type === "code",
      })}
    >
      <Content />
    </a>
  );
};

export default Link;
