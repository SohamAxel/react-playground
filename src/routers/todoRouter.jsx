import { createBrowserRouter, redirect } from "react-router-dom";
import TodoList from "../Pages/TodoList";
import NewTodo from "../Pages/NewTodo";

const todoRouter = createBrowserRouter([
  {
    index: true,
    element: <TodoList />,
    loader: async ({ request: { signal, url } }) => {
      const searchParams = new URL(url).searchParams;
      const query = searchParams.get("query") ?? "";
      return {
        query: query,
        todos: await fetch(`http://127.0.0.1:3000/todos?q=${query}`, {
          signal,
        }).then((res) => res.json()),
      };
    },
  },
  {
    path: "/new",
    element: <NewTodo />,
    action: async ({ request }) => {
      const formData = await request.formData();
      const getTitle = formData.get("title");

      if (getTitle === "") {
        return "Title is required";
      }

      await fetch("http://127.0.0.1:3000/todos", {
        signal: request.signal,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: getTitle }),
      }).then((res) => res.json());

      return redirect("/");
    },
  },
]);

export default todoRouter;
