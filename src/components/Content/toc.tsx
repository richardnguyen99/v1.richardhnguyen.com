import * as React from "react";

type ItemProps = {
  title: string;
  url: string;
  items?: Array<{
    title: string;
    url: string;
  }>;
};

type ItemArrayProps = Array<ItemProps>;

export type TOCProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLElement> & {
    toc: string;
  }
>;

const Toc: React.FC<TOCProps> = ({ toc, ...rest }) => {
  return (
    <div {...rest}>
      <h1>On this page</h1>
      <div dangerouslySetInnerHTML={{ __html: toc }}></div>
    </div>
  );
};

export default Toc;
