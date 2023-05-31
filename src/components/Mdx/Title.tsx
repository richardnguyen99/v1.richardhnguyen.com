import * as React from "react";
import clsx from "classnames";

type Props = {
  children: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

const Title: React.FC<Props> = ({
  children,
  className: _className, // Disable className prop
  ...rest
}) => {
  return (
    <h1
      {...rest}
      id="title"
      className={clsx("", {
        "text-5xl xl:text-6xl": true,
        "text-transparent bg-clip-text bg-gradient-to-r to-sky-200 from-cyan-500":
          true,
        "font-extrabold gradient lg:font-black": true,
        "leading-normal xl:leading-loose tracking-tight lg:tracking-tighter":
          true,
      })}
    >
      {children}
    </h1>
  );
};

export default Title;
