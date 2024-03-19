import React, { useCallback, useEffect, useRef, useState } from "react";
import { TreeView } from "./TreeView/TreeView";
import { useLoaderData } from "react-router-dom";
import { getContents } from "../../api/contents";

export function Contents() {
  const contents = useLoaderData();
  const [activeNode, setActiveNode] = useState("0");

  /*
  const toggleActiveNode = useCallback(() => {
    setActiveNode(!activeNode);
  }, [activeNode]);
  */

  return (
    <TreeView
      data={contents}
      activeNode={activeNode}
      setActiveNode={setActiveNode}
    />
  );
}

async function loader({ request: { url, signal } }) {
  const path = url.slice(url.lastIndexOf("/") + 1);
  return await getContents(path, { signal });
}

export const contentsRoute = {
  element: <Contents />,
  loader,
};
