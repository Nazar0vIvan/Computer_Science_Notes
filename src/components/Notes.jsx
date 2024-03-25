import React from "react";
import Markdown from "markdown-to-jsx";
import { useLoaderData } from "react-router-dom";

function Notes() {
  const markdown = useLoaderData();
  return <Markdown>{markdown}</Markdown>;
}

async function loader({ request: { signal } }) {
  return "Hello world"; // getCards({ signal });
}

export const notesRoute = {
  element: <Notes />,
  loader,
};
