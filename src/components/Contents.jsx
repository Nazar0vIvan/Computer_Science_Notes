import React, { createContext, useContext, useEffect, useState } from "react";
import { TreeView } from "./TreeView/TreeView";
import { useLoaderData } from "react-router-dom";
import { getContents } from "../../api/contents";

export const TreeContext = createContext(null);

export function Contents() {
  const contents = useLoaderData();
  const [activeNode, setActiveNode] = useState("0");

  /*
  const toggleActiveNode = useCallback(() => {
    setActiveNode(!activeNode);
  }, [activeNode]);
  */

  useEffect(() => {
    console.log(activeNode);
  }, [activeNode]);

  return (
    <TreeContext.Provider value={{ activeNode, setActiveNode }}>
      <TreeView data={contents} />
    </TreeContext.Provider>
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
