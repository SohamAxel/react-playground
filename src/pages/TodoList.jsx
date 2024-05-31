import { Await, defer, useLoaderData } from "react-router-dom";
import { getTodos } from "../api/todos";
import { TodoItem, TodoItemSkeleton } from "../components/TodoItem";
import { Suspense } from "react";

function TodoList() {
  const { todosPromise } = useLoaderData();

  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        <Suspense
          fallback={Array.from(Array(26).keys()).map((e) => (
            <TodoItemSkeleton />
          ))}
        >
          <Await resolve={todosPromise}>
            {(todos) =>
              todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
            }
          </Await>
        </Suspense>
      </ul>
    </>
  );
}

function loader({ request: { signal } }) {
  return defer({ todosPromise: getTodos({ signal }) });
}

export const todoListRoute = {
  loader,
  element: <TodoList />,
};
