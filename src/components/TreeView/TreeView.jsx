import { TreeNode } from "./TreeNode";

export function TreeView({ data }) {
  return (
    <div className="tree-view">
      {data.map((node) => (
        <TreeNode key={node.key} node={node} />
      ))}
    </div>
  );
}
