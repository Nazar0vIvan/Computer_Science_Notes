import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "./arrow.svg";
import FileIcon from "./file.svg";
import FolderIcon from "./folder.svg";

export function TreeView({ data }) {
  return (
    <div className="tree-view">
      {data.map((node) => (
        <TreeNode key={node.key} node={node} />
      ))}
    </div>
  );
}

function TreeNode({ node }) {
  const [isActive, setIsActive] = useState(false);
  const { key, label, children } = node;

  const toggleActive = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  const isChildren = useCallback(() => {
    return children != null;
  }, [children]);

  const getNodeLevel = useCallback(() => {
    return (key.match(/-/g) || []).length;
  }, [key]);

  return (
    <div
      className="tree-node"
      style={{ position: "relative", "--level": getNodeLevel() }}
    >
      <div className={`tree-node__active-mark ${isActive ? "show" : ""}`}></div>
      <Link className="tree-node__link" onClick={toggleActive}>
        <img
          className="tree-node__icon"
          src={isChildren() ? ArrowIcon : ""}
          alt=" "
        ></img>
        <img
          className="tree-node__icon"
          src={isChildren() ? FolderIcon : FileIcon}
        ></img>
        <p>{label}</p>
      </Link>
      {isActive && isChildren() && <TreeView data={children} />}
    </div>
  );
}
