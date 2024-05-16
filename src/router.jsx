import { Outlet, createBrowserRouter, useNavigation } from "react-router-dom";
import Posts from "./Pages/Posts";
import MainNavBar from "./Components/MainNavBar";
import Users from "./Pages/Users";
import Todos from "./Pages/Todos";
import Loader from "./Components/Loader";
import Post from "./Pages/Post";
import { getPostDetails, getUserDetails } from "./utility/buildResponseData";
import User from "./Pages/User";
import ErrorPage from "./Pages/ErrorPage";

const MainNavBarLayout = () => {
  const { state } = useNavigation();
  return (
    <>
      <MainNavBar />
      {state === "loading" ? <Loader /> : <Outlet />}
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <MainNavBarLayout />,
    children: [
      { path: "*", element: <ErrorPage /> },
      {
        path: "/posts",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Posts />,
            loader: ({ request }) => {
              return fetch("http://127.0.0.1:3000/posts", {
                signal: request.signal,
              });
            },
          },
          {
            path: ":postId",
            element: <Post />,
            loader: getPostDetails,
          },
        ],
      },
      {
        path: "/users",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Users />,
            loader: ({ request }) => {
              return fetch("http://127.0.0.1:3000/users", {
                signal: request.signal,
              });
            },
          },
          {
            path: ":userId",
            loader: getUserDetails,
            element: <User />,
          },
        ],
      },
      {
        path: "/todos",
        element: <Todos />,
        loader: ({ request }) => {
          return fetch("http://127.0.0.1:3000/todos", {
            signal: request.signal,
          });
        },
      },
    ],
  },
]);

export default router;
