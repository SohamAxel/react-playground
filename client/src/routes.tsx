import { Navigate, RouteObject } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { ErrorPage } from "@/pages/ErrorPage";
import { TaskListPage } from "@/pages/tasks/TaskListPage";
import { NewTaskPage } from "@/pages/tasks/NewTaskPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import AuthLayout from "./layouts/AuthLayout";
import { LoginForm, SignupForm } from "./features/user-login";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Navigate to="/tasks" replace />,
          },
          {
            path: "tasks",
            children: [
              { index: true, element: <TaskListPage /> },
              { path: "new", element: <NewTaskPage /> },
            ],
          },
          {
            element: <AuthLayout />,
            children: [
              { path: "login", element: <LoginForm /> },
              { path: "signup", element: <SignupForm /> },
            ],
          },
          { path: "*", element: <NotFoundPage /> },
        ],
      },
    ],
  },
];
