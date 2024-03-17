import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "./arrow.svg";
import FileIcon from "./file.svg";
import FolderIcon from "./folder.svg";

export const TreeView = forwardRef(function TreeView({ data }, ref) {
  return (
    <div ref={ref} className="tree-view">
      {data.map((node) => (
        <TreeNode key={node.key} node={node} />
      ))}
    </div>
  );
});

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
    <>
      <div className="tree-node" style={{ "--level": getNodeLevel() }}>
        <div
          className={`tree-node__active-mark ${isActive ? "show" : ""}`}
        ></div>
        <Link
          className={`tree-node__link ${
            isActive ? "tree-node__link_active" : ""
          }`}
          onClick={toggleActive}
        >
          <img
            className={`tree-node__icon ${
              isActive ? "tree-node__icon_active" : ""
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
      {isActive && isChildren() && <TreeView data={children} />}
    </>
  );
}
