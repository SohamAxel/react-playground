import { useState } from "react";

const TodoForm = ({ setList, count }) => {
  const [toDoInput, setToDoInput] = useState("");

  return (
    <div id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input
        type="text"
        id="todo-input"
        value={toDoInput}
        onChange={(e) => setToDoInput(e.target.value)}
      />
      <button
        onClick={() => {
          setList((prevList) => [
            ...prevList,
            {
              id: prevList.length,
              value: toDoInput,
            },
          ]);
          setToDoInput("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
