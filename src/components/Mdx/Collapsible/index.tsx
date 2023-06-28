import * as React from "react";

export type CollapsibleProps = {
  summary: string;
};

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & CollapsibleProps
>;

const Collapsible: React.FC<Props> = ({ children, summary, ...rest }) => {
  return (
    <div {...rest}>
      <h3></h3>
    </div>
  );
};

export default Collapsible;
