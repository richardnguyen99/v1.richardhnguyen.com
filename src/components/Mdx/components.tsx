import * as React from "react";
import { Components as MDXComponents } from "@mdx-js/react/lib/index";

import type { PreProps } from "./types";
import Code from "./Code";
import { preparePreProps } from "./util";

const mdxComponents: MDXComponents = {
  pre: (preProps) => {
    const preparedProps = preparePreProps(preProps as PreProps);

    if (!preparedProps) return <pre {...preProps} />;

    return <Code {...preparedProps} />;
  },
};

export default mdxComponents;
