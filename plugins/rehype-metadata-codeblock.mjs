import { visit } from "unist-util-visit";

const transformer = (tree) => {
  const re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g;

  return visit(tree, "element", function (node) {
    let match;

    if (
      node.tagName === "code" &&
      typeof node.properties.className === "undefined"
    ) {
      node.properties.className = "mdx-code";
      return;
    }

    if (node.tagName === "code" && node.data && node.data.meta) {
      re.lastIndex = 0; // Reset regex.

      while ((match = re.exec(node.data.meta))) {
        node.properties[match[1]] = match[2] || match[3] || match[4] || true;
      }
    }
  });
};

const rehypeMetadataCodeblock = () => transformer;

export default rehypeMetadataCodeblock;
