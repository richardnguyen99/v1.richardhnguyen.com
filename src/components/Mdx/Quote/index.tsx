import * as React from "react";

export type QuoteProps = {
  citation: string;
};

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLQuoteElement> & QuoteProps
>;

const Quote: React.FC<Props> = ({ children, citation, ...rest }) => {
  return (
    <blockquote {...rest} className="quote">
      <div>{children}</div>
      <cite>{citation}</cite>
    </blockquote>
  );
};

export default Quote;
