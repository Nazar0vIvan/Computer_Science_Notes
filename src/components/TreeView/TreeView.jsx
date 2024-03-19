import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "./arrow.svg";
import FileIcon from "./file.svg";
import FolderIcon from "./folder.svg";

export function TreeView({ data, activeNode, setActiveNode }) {
  return (
    <div className="tree-view">
      {data.map((node) => (
        <TreeNode
          key={node.key}
          node={node}
          activeNode={activeNode}
          onClick={setActiveNode}
        />
      ))}
    </div>
  );
}

function TreeNode({ node, activeNode, onClick }) {
  const { key, label, children } = node;

  const isChildren = useCallback(() => {
    return children != null;
  }, [children]);

  const getNodeLevel = useCallback(() => {
    return (key.match(/-/g) || []).length;
  }, [key]);

  return (
    <>
      <div className="tree-node" style={{ "--level": getNodeLevel() }}>
        <div
          className={`tree-node__active-mark ${
            activeNode === key ? "show" : ""
          }`}
        ></div>
        <Link
          className={`tree-node__link ${
            activeNode === key ? "tree-node__link_active" : ""
          }`}
          onClick={() => onClick(key)}
        >
          <img
            className={`tree-node__icon ${
              activeNode === key ? "tree-node__icon_active" : ""
            }`}
            src={isChildren() ? ArrowIcon : ""}
            alt=" "
          ></img>
          <img
            className="tree-node__icon"
            src={isChildren() ? FolderIcon : FileIcon}
          ></img>
          <p>{label}</p>
        </Link>
      </div>
      {activeNode === key && isChildren() && (
        <TreeView
          data={children}
          activeNode={activeNode}
          setActiveNode={onClick}
        />
      )}
    </>
  );
}
