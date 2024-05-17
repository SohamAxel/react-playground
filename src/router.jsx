import { Outlet, createBrowserRouter, Navigate } from "react-router-dom";
import { postListRoute } from "./Pages/Posts";
import { userListRoute } from "./Pages/Users";
import { todoListRoute } from "./Pages/Todos";
import { postRoute } from "./Pages/Post";
import { userRoute } from "./Pages/User";
import ErrorPage from "./Pages/ErrorPage";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/posts" /> },
      { path: "*", element: <ErrorPage /> },
      {
        path: "/posts",
        // optional -
        // element: <Outlet />,
        children: [
          {
            index: true,
            ...postListRoute,
          },
          {
            path: ":postId",
            ...postRoute,
          },
        ],
      },
      {
        path: "/users",
        children: [
          {
            index: true,
            ...userListRoute,
          },
          {
            path: ":userId",
            ...userRoute,
          },
        ],
      },
      {
        path: "/todos",
        ...todoListRoute,
      },
    ],
  },
]);

export default router;
