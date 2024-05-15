import React, { useState, useRef } from "react";
import { ACTIONS } from "../Actions/todoAction";

const TodoListItem = ({ todo, dispatch, hideCompleted }) => {
  const inputRef = useRef("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    if (isEditing) {
      dispatch({
        type: ACTIONS.TODO_UPDATE,
        payload: {
          of: todo.id,
          value: {
            ...todo,
            value: inputRef.current.value,
          },
        },
      });
    }
    setIsEditing((d) => !d);
  };

  const handleComplete = (e) => {
    dispatch({
      type: ACTIONS.TODO_UPDATE,
      payload: {
        of: todo.id,
        value: {
          ...todo,
          completed: !todo.completed,
        },
      },
    });
  };

  return (
    <li className="list-item" hidden={hideCompleted && todo.completed}>
      <label className="list-item-label">
        <input
          type="checkbox"
          data-list-item-checkbox=""
          checked={todo.completed}
          onChange={handleComplete}
        />
        {isEditing ? (
          <input type="text" ref={inputRef} defaultValue={todo.value} />
        ) : (
          <span data-list-item-text="">{todo.value}</span>
        )}
      </label>
      <button data-button-edit="" onClick={handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        data-button-delete=""
        onClick={() =>
          dispatch({ type: ACTIONS.TODO_REMOVE, payload: { value: todo.id } })
        }
      >
        Delete
      </button>
    </li>
  );
};

export default TodoListItem;
