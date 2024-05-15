import React, { useContext } from "react";
import { TodoContext } from "./TodoMain";

const TodoFilterForm = () => {
  const { updateFilterValue, hideAllCompleted, todos } =
    useContext(TodoContext);

  return (
    <div className="filter-form">
      <div className="filter-form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={todos.filter}
          onChange={(e) => updateFilterValue(e.target.value)}
        />
      </div>
      <label>
        <input
          type="checkbox"
          checked={todos.hideCompleted}
          onChange={hideAllCompleted}
        />
        Hide Completed
      </label>
    </div>
  );
};

export default TodoFilterForm;
