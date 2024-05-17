import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import basicRouter from "./routers/basicRouter.jsx";
import todoRouter from "./routers/todoRouter.jsx";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={basicRouter} /> */}
    <RouterProvider router={todoRouter} />
  </React.StrictMode>
);
