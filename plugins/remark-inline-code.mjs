import { visit } from "unist-util-visit";

const transformer = (tree) => {
  return visit(tree, "inlineCode", function (node) {
    node.properties;
  });
};

const remarkInlineCode = () => transformer;

export default remarkInlineCode;
