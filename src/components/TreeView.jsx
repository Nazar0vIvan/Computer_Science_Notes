import { useState } from "react";
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
  const { children, label } = node;

  function toggleActive() {
    setIsActive(!isActive);
  }

  function isChildren() {
    return children != null;
  }
  /*
<div className={`tree-node__active-mark ${isActive ? "show" : ""}`}></div>
  */
  return (
    <div className="tree-node">
      <Link className="tree-node__link" onClick={toggleActive}>
        <div
          className={`tree-node__overlay ${isActive ? "elev" : "elev-off"}`}
        ></div>
        <img
          className="tree-node__icon"
          src={isChildren() ? ArrowIcon : ""}
          alt=" "
        ></img>
        <img
          className="tree-node__icon"
          src={isChildren() ? FolderIcon : FileIcon}
        ></img>
        <p className="tree-node__text">{label}</p>
      </Link>
      {isActive && isChildren() && <TreeView data={children} />}
    </div>
  );
}
