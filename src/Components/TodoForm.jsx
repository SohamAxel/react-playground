import { useState } from "react";

const TodoForm = ({ setList, count }) => {
  const [toDoInput, setToDoInput] = useState("");

  const addNewTodo = (e) => {
    e.preventDefault();
    if (toDoInput === "") return;

    setList((prevList) => [
      ...prevList,
      {
        id: crypto.randomUUID(),
        value: toDoInput,
        completed: false,
      },
    ]);
    setToDoInput("");
  };

  return (
    <form onSubmit={addNewTodo} id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input
        type="text"
        id="todo-input"
        value={toDoInput}
        onChange={(e) => setToDoInput(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
