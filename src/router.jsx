import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { cardsListRoute } from "./components/CardsList";
import { contentsRoute } from "./components/Contents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        ...cardsListRoute,
      },
      {
        path: "react",
        ...contentsRoute,
      },
    ],
  },
]);
