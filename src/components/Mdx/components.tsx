import * as React from "react";
import type { Components as MDXComponents } from "@mdx-js/react/lib/index";

import type { PreProps } from "./types";
import { preparePreProps } from "./util";
import Code from "./Code";
import Link from "./Link";
import PageBreak from "./PageBreak";
import Quote from "./Quote";
import Collapsible from "./Collapsible";
import Callout from "./Callout";

const mdxComponents: MDXComponents = {
  PageBreak,
  Quote,
  Collapsible,
  Callout,

  pre: (preProps) => {
    console.log(preProps);
    const preparedProps = preparePreProps(preProps as PreProps);

    if (!preparedProps) return <pre {...preProps} />;

    return <Code {...preparedProps} />;
  },

  a: (anchorProps) => {
    if (anchorProps.href[0] === "#") return <a {...anchorProps} />;

    let content;
    let type = "text";

    if (typeof anchorProps.children === "string")
      content = anchorProps.children;
    else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      content = anchorProps.children?.props?.children;
      type = "code";
      // @ts-check
    }

    return (
      <Link href={anchorProps.href} type={type}>
        {content}
      </Link>
    );
  },
};

export default mdxComponents;
