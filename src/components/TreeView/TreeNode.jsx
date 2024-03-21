import { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "./arrow.svg";
import FileIcon from "./file.svg";
import FolderIcon from "./folder.svg";
import { TreeContext } from "../Contents";
import { TreeView } from "./TreeView";

export function TreeNode({ node }) {
  const { activeNode, setActiveNode } = useContext(TreeContext);
  const [isOpen, setIsOpen] = useState(false);
  const { key, label, children } = node;

  const toggleIsOpen = useCallback(() => {
    if (isOpen) return;
    setIsOpen(!isOpen);
  }, [isOpen]);

  const isChildren = useCallback(() => {
    return children != null;
  }, [children]);

  const getNodeLevel = useCallback(() => {
    return (key.match(/-/g) || []).length;
  }, [key]);

  /*
  useEffect(() => {
    console.log(treeContext);
  }, []);
  */

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
          onClick={() => {
            setActiveNode(key);
            toggleIsOpen();
          }}
        >
          <img
            className={`tree-node__icon ${
              isOpen ? "tree-node__icon_active" : ""
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
      {isOpen && isChildren() && <TreeView data={children} />}
    </>
  );
}
