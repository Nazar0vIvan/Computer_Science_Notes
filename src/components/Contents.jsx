import React from "react";
import { TreeView } from "./TreeView";
import { useLoaderData } from "react-router-dom";

export function Contents() {
  const contents = useLoaderData();
  return <TreeView data={contents} />;
}
