import React from "react";
import { ACTIONS } from "../Actions/todoAction";

const TodoListItem = ({ todo, dispatch, hideCompleted }) => {
  return (
    <li className="list-item" hidden={hideCompleted && todo.completed}>
      <label className="list-item-label">
        <input
          type="checkbox"
          data-list-item-checkbox=""
          checked={todo.completed}
          onChange={() =>
            dispatch({
              type: ACTIONS.TODO_TASK_TOGGLE,
              payload: { value: todo.id },
            })
          }
        />
        <span data-list-item-text="">{todo.value}</span>
      </label>
      <button data-button-edit="">Edit</button>
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
