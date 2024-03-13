import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { cardsListRoute } from "./components/CardsList";
import { Contents } from "./components/Contents";
import { getContents } from "../api/contents";

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
        element: <Contents />,
        loader: async ({ request: { signal } }) => {
          return await getContents("react", { signal });
        },
      },
    ],
  },
]);

/*
{
  errorElement: <ErrorPage />,
  children: [
    { index: true, element: <Navigate to="/posts" /> },
    {
      path: "posts",
      children: [
        { index: true, ...postListRoute },
        { path: ":postId", ...postRoute },
      ],
    },
    {
      path: "users",
      children: [
        { index: true, ...userListRoute },
        { path: ":userId", ...userRoute },
      ],
    },
    { path: "todos", ...todoListRoute },
    { path: "*", element: <h1>404 - Page Not Found</h1> },
  ],
},
*/
