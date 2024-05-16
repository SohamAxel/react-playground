import React from "react";
import { useLoaderData } from "react-router-dom";

const Todos = () => {
  const todos = useLoaderData();
  return (
    <div className="container">
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "strike-through" : ""}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
