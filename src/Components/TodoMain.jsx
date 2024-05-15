import React, { createContext, useEffect, useReducer } from "react";
import TodoFilterForm from "./TodoFilterForm";
import TodoList from "./TodoList";
import "../style.css";
import TodoAddForm from "./TodoAddForm";
import { todoReducer } from "../Reducers/todoReducer.js";

export const TodoContext = createContext();

const INITIAL_TODO = {
  filter: "",
  list: [],
  hideCompleted: false,
};

const TodoMain = () => {
  const [todos, dispatch] = useReducer(
    todoReducer,
    INITIAL_TODO,
    (INITIAL_TODO) => {
      const localTodos = localStorage.getItem("mytodos");
      if (localTodos != null) {
        return JSON.parse(localTodos);
      }
      return INITIAL_TODO;
    }
  );
  console.log(todos);
  useEffect(() => {
    localStorage.setItem("mytodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ dispatch, todos }}>
      <TodoFilterForm />
      <TodoList />
      <TodoAddForm />
    </TodoContext.Provider>
  );
};

export default TodoMain;
