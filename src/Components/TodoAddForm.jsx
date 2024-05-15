import React, { useContext, useState, useRef } from "react";
import { TodoContext } from "./TodoMain";

const TodoAddForm = () => {
  const { addNewTodo } = useContext(TodoContext);
  const inputRef = useRef();
  // const [todoInput, setTodoInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewTodo(inputRef.current.value);
    inputRef.current.value = "";
    // setTodoInput("");
  };

  return (
    <form id="new-todo-form" onSubmit={handleSubmit}>
      <label htmlFor="todo-input">New Todo</label>
      <input
        type="text"
        ref={inputRef}
        id="todo-input"
        // value={todoInput}
        // onChange={(e) => setTodoInput(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoAddForm;
