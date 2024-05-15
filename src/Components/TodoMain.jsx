import React, { createContext, useEffect, useReducer } from "react";
import TodoFilterForm from "./TodoFilterForm";
import TodoList from "./TodoList";
import "../style.css";
import { ACTIONS } from "../Actions/todoAction";
import TodoAddForm from "./TodoAddForm";
import { todoReducer } from "../Reducers/todoReducer.js";

export const TodoContext = createContext();

const LOCAL_STORAGE_KEY = "mytodos";

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
      const localTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (localTodos != null) {
        return JSON.parse(localTodos);
      }
      return INITIAL_TODO;
    }
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = (name) => {
    dispatch({ type: ACTIONS.TODO_ADD, payload: { value: name } });
  };

  const updateTodo = (id, updateValue) => {
    dispatch({
      type: ACTIONS.TODO_UPDATE,
      payload: {
        of: id,
        value: updateValue,
      },
    });
  };

  const deleteTodo = (id) => {
    dispatch({ type: ACTIONS.TODO_REMOVE, payload: { value: id } });
  };

  const updateFilterValue = (filterValue) => {
    dispatch({
      type: ACTIONS.TODO_FILTER,
      payload: { value: filterValue },
    });
  };

  const hideAllCompleted = () => {
    dispatch({ type: ACTIONS.TODO_HIDE_COMPLETED });
  };

  return (
    <TodoContext.Provider
      value={{
        dispatch,
        todos,
        updateTodo,
        addNewTodo,
        deleteTodo,
        addNewTodo,
        updateFilterValue,
        hideAllCompleted,
      }}
    >
      <TodoFilterForm />
      <TodoList />
      <TodoAddForm />
    </TodoContext.Provider>
  );
};

export default TodoMain;
