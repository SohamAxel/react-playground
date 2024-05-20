import { createBrowserRouter } from "react-router-dom";
import { homeRoute } from "./Pages/Home";
import RootLayout from "./Layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        ...homeRoute,
      },
      {
        path: "books",
        children: [
          {
            path: "search",
          },
          {
            path: "me",
          },
        ],
      },
    ],
  },
]);

export default router;
