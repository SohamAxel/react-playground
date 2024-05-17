import React, { useEffect, useRef } from "react";
import { Form, Link, useLoaderData, useNavigation } from "react-router-dom";

const TodoList = () => {
  const { query, todos } = useLoaderData();
  const { state } = useNavigation();
  const searchInput = useRef();

  useEffect(() => {
    searchInput.current.value = query;
  }, [query]);

  return (
    <div className="container">
      <h1 className="page-title mb-2">
        Todos
        <div className="title-btns">
          <Link to="/new" className="btn">
            New
          </Link>
        </div>
      </h1>

      <Form action="" className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Search</label>
            <input type="search" name="query" id="query" ref={searchInput} />
          </div>
          <button className="btn">Search</button>
        </div>
      </Form>

      {state === "loading" ? (
        "Loading"
      ) : (
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={todo.completed ? "strike-through" : ""}
            >
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
