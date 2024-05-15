import React, { useState, useRef, useContext } from "react";
import { TodoContext } from "./TodoMain";

const TodoListItem = ({ todo, dispatch, hideCompleted }) => {
  const { updateTodo, deleteTodo } = useContext(TodoContext);
  const inputRef = useRef("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    if (isEditing) {
      updateTodo(todo.id, { value: inputRef.current.value });
    }
    setIsEditing((d) => !d);
  };

  return (
    <li className="list-item" hidden={hideCompleted && todo.completed}>
      {isEditing ? (
        <input type="text" ref={inputRef} defaultValue={todo.value} />
      ) : (
        <label className="list-item-label">
          <input
            type="checkbox"
            data-list-item-checkbox=""
            checked={todo.completed}
            onChange={() => updateTodo(todo.id, { completed: !todo.completed })}
          />
          <span data-list-item-text="">{todo.value}</span>
        </label>
      )}
      <button data-button-edit="" onClick={handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button data-button-delete="" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoListItem;
