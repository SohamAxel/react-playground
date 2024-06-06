import { Navigate, RouteObject } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { ErrorPage } from "@/pages/ErrorPage";
import { TaskListPage } from "@/pages/tasks/TaskListPage";
import { NewTaskPage } from "@/pages/tasks/NewTaskPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { AuthLayout, LoginForm, SignupForm } from "./features/user-login";
import { myJobListPageRoute } from "./pages/mylisting/MyJobLisitPage";
import { myJobListEditPageRoute } from "./pages/mylisting/MyJobListEditPage";
import JobListLayout from "./layouts/JobListLayout";
import MyNewJobPage from "./pages/mylisting/MyNewJobPage";
import { orderCompleteRoute } from "./pages/mylisting/order-complete";
import { publicJobListingPageRoute } from "./pages/joblisting";

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
              { index: true, ...myJobListPageRoute },
              { path: "new", element: <MyNewJobPage /> },
              {
                path: "edit",
                children: [{ path: ":id", ...myJobListEditPageRoute }],
              },
              { path: "order-complete", ...orderCompleteRoute },
            ],
          },
          {
            path: "job-list",
            ...publicJobListingPageRoute,
          },
          { path: "*", element: <NotFoundPage /> },
        ],
      },
    ],
  },
];
