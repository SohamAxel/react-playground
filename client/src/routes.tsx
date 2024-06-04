import { Navigate, RouteObject } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { ErrorPage } from "@/pages/ErrorPage";
import { TaskListPage } from "@/pages/tasks/TaskListPage";
import { NewTaskPage } from "@/pages/tasks/NewTaskPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { AuthLayout, LoginForm, SignupForm } from "./features/user-login";
import MyJobLisiting from "./pages/mylisting/MyJobLisitPage";
import JobListLayout from "./layouts/JobListLayout";
import MyNewJobPage from "./pages/mylisting/MyNewJobPage";

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
          {
            path: "my-listing",
            element: <JobListLayout />,
            children: [
              { index: true, element: <MyJobLisiting /> },
              { path: "new", element: <MyNewJobPage /> },
            ],
          },
          { path: "*", element: <NotFoundPage /> },
        ],
      },
    ],
  },
];
