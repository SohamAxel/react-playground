import React from "react";
import { useLoaderData } from "react-router-dom";

const Todos = () => {
  const todos = useLoaderData();
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "strike-through" : ""}>
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};

const loader = ({ request }) => {
  return fetch("http://127.0.0.1:3000/todos", {
    signal: request.signal,
  });
};

export const todoListRoute = {
  element: <Todos />,
  loader,
};
