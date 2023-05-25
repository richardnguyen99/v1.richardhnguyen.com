import * as React from "react";

import type { CalloutProps } from "./types";

type Props = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

const Callout: React.FC<CalloutProps & Props> = ({
  children,
  title,
  type,
  collapsible,
  ...rest
}) => {
  return <div {...rest}>{children}</div>;
};

export default Callout;
