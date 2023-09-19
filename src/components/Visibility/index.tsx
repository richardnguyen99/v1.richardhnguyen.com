import * as React from "react";
import clsx from "classnames";

import type { VisibilityProps } from "./type";

import useInViewport from "@hooks/useInViewport";

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & VisibilityProps
>;

const Visibility: React.FC<Props> = ({
  visible,
  delay,
  offset,
  children,
  className,
  ...rest
}) => {
  const [inViewport, targetRef] = useInViewport<HTMLDivElement>({});

  const [visibleState, setVisibleState] = React.useState(false);

  React.useEffect(() => {
    if (inViewport) {
      setVisibleState(true);
    }
  }, [inViewport]);

  return (
    <div
      ref={targetRef}
      {...rest}
      data-visible={visible}
      data-delay={delay}
      data-offset={offset}
      className={clsx(className, {
        "is-visible": visibleState,
      })}
    >
      {children}
    </div>
  );
};

export default Visibility;
