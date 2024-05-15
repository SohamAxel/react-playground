import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoMain";
import { ACTIONS } from "../Actions/todoAction";

const TodoFilterForm = () => {
  const { dispatch, todos } = useContext(TodoContext);

  return (
    <div className="filter-form">
      <div className="filter-form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={todos.filter}
          onChange={(e) =>
            dispatch({
              type: ACTIONS.TODO_FILTER,
              payload: { value: e.target.value },
            })
          }
        />
      </div>
      <label>
        <input
          type="checkbox"
          checked={todos.hideCompleted}
          onChange={(e) => dispatch({ type: ACTIONS.TODO_HIDE_COMPLETED })}
        />
        Hide Completed
      </label>
    </div>
  );
};

export default TodoFilterForm;
