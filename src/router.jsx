import { createBrowserRouter, Navigate } from "react-router-dom";
import { postListRoute } from "./Pages/Posts";
import { userListRoute } from "./Pages/Users";
import { todoListRoute } from "./Pages/Todos";
import { postRoute } from "./Pages/Post";
import { newPostRoute } from "./Pages/NewPost";
import { editPostRoute } from "./Pages/EditPost";
import { userRoute } from "./Pages/User";
import ErrorPage from "./Pages/ErrorPage";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          { path: "*", element: <h1>Error not found 404</h1> },
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
                path: "new",
                ...newPostRoute,
              },
              {
                path: ":postId",
                children: [
                  {
                    index: true,
                    ...postRoute,
                  },
                  {
                    path: "edit",
                    ...editPostRoute,
                  },
                ],
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
    ],
  },
]);

export default router;
