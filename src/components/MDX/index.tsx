/**
 * Index file for components used in MDX.
 *
 * The purpose of this folder is to create a list of general-purposed custom
 * components that will be imported in <MDXProvider /> to either replace the
 * original HTML elements with more functional React components or use those
 * components without direct import.
 *
 * For how the content is structured, for example, layout, styling, color
 * see src/components/Content
 * `
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import CodeBlock from "./CodeBlock";
import Alert from "./Alert";

const MDXComponents = {
  pre: (preProps) => {
    const checkPreProps = (_preProps) => {
      const {
        children: rawCodeString,
        className = "",
        ...props
      } = _preProps.children.props;

      const match = className.match(/language-([\0-\uFFFF]*)/);

      return {
        rawCodeString: rawCodeString.trim(),
        language: match !== null ? match[1] : "",
        className,
        ...props,
      };
    };

    const props = checkPreProps(preProps);

    if (props) {
      return <CodeBlock {...props} />;
    }

    return <pre {...preProps} />;
  },

  Alert,
};

export default MDXComponents;
