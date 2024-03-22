import { useContext, useState } from "react";
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

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  function isChildren() {
    return children != null;
  }

  function getNodeLevel() {
    return (key.match(/-/g) || []).length;
  }

  function isContainActiveNode() {
    if (!isChildren()) return;

    for (let i = 0; i < key.length; i++) {
      if (activeNode[i] != key[i]) return false;
    }
    return true;
  }

  function handleLinkClick(e) {
    setActiveNode(key);
    if (!isOpen) setIsOpen(true);
  }

  function handleOpenClick(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleIsOpen();
  }

  /*
  useEffect(() => {
    console.log(treeContext);
  }, []);
  */

  return (
    <>
      <div className="tree-node" style={{ "--level": getNodeLevel() }}>
        <div
          className={`tree-node__mark ${activeNode === key && "show"}`}
        ></div>
        <Link
          className={`tree-node__link ${
            activeNode === key && "tree-node__link_active"
          } ${!isChildren() && "tree-node__link_file"}`}
          onClick={handleLinkClick}
        >
          {isChildren() && (
            <div className="tree-node__icon-wrapper" onClick={handleOpenClick}>
              <img
                className={`tree-node__icon-arrow ${isOpen && "rotate-90"}`}
                src={ArrowIcon}
              ></img>
            </div>
          )}
          <img
            className="tree-node__icon-file"
            src={isChildren() ? FolderIcon : FileIcon}
          ></img>
          <p>{label}</p>
        </Link>
      </div>
      {isOpen && isChildren() && <TreeView data={children} />}
    </>
  );
}
