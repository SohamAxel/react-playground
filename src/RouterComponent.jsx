import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts from "./Posts";
import postLoader from "./Posts";
import Nav from "./Nav";
import homeLoader from "./Home";

const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      { index: true, ...homeLoader },
      { path: "/posts", ...postLoader },
    ],
  },
]);

const RouterComponent = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};
export default RouterComponent;
