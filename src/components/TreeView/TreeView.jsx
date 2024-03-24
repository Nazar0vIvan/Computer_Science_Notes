import { useContext } from "react";
import { TreeNode } from "./TreeNode";
import { TreeContext } from "../Contents";

export function TreeView({ data }) {
  const { activeNode, setActiveNode } = useContext(TreeContext);

  function isContainActiveNode(node) {
    const { key, children } = node;
    if (children == undefined) return false;
    for (let i = 0; i < key.length; i++) {
      if (activeNode[i] != key[i]) return false;
    }
    return true;
  }

  return (
    <div className="tree-view">
      {data.map((node) => (
        <TreeNode
          key={node.key}
          node={node}
          isOpenValue={isContainActiveNode(node)}
        />
      ))}
    </div>
  );
}
