import React, { useEffect, useRef, useState } from "react";
import { TreeView } from "./TreeView/TreeView";
import { useLoaderData } from "react-router-dom";
import { getContents } from "../../api/contents";

export function Contents() {
  const contents = useLoaderData();
  const treeRef = useRef();
  const [activeNode, setActiveNode] = useState("0");

  useEffect(() => {
    console.log(treeRef.current);
  }, []);

  return <TreeView ref={treeRef} data={contents} />;
}

async function loader({ request: { url, signal } }) {
  const path = url.slice(url.lastIndexOf("/") + 1);
  return await getContents(path, { signal });
}

export const contentsRoute = {
  element: <Contents />,
  loader,
};
