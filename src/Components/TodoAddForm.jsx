import React, { useContext, useState, useRef } from "react";
import { TodoContext } from "./TodoMain";
import { ACTIONS } from "../Actions/todoAction";

const TodoAddForm = () => {
  const { dispatch } = useContext(TodoContext);
  const inputRef = useRef();
  // const [todoInput, setTodoInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newListItem = {
      id: crypto.randomUUID(),
      value: inputRef.current.value,
      // value: todoInput,
      completed: false,
    };
    console.log(inputRef.current.value);
    dispatch({ type: ACTIONS.TODO_ADD, payload: { value: newListItem } });
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
