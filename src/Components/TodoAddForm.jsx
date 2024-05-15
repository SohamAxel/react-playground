import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoMain";
import { ACTIONS } from "../Actions/todoAction";

const TodoAddForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [todoInput, setTodoInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newListItem = {
      id: crypto.randomUUID(),
      value: todoInput,
      completed: false,
    };

    dispatch({ type: ACTIONS.TODO_ADD, payload: { value: newListItem } });
    setTodoInput("");
  };

  return (
    <form id="new-todo-form" onSubmit={handleSubmit}>
      <label htmlFor="todo-input">New Todo</label>
      <input
        type="text"
        id="todo-input"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoAddForm;
