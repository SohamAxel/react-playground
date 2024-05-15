import React, { useContext } from "react";
import { TodoContext } from "./TodoMain";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);

  const filteredList = () => {
    return todos.list.filter((todo) =>
      todo.value.toLowerCase().includes(todos.filter.toLowerCase())
    );
  };

  return (
    <ul id="list">
      {filteredList().map((todo) => (
        <TodoListItem
          key={todo.id}
          dispatch={dispatch}
          todo={todo}
          hideCompleted={todos.hideCompleted}
        />
      ))}
    </ul>
  );
};

export default TodoList;
