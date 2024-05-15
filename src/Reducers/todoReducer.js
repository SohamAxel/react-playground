import { ACTIONS } from "../Actions/todoAction";

export const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.TODO_ADD:
      return {
        ...state,
        list: [...state.list, payload.value],
      };
    case ACTIONS.TODO_REMOVE:
      const newList = state.list.filter((todo) => todo.id !== payload.value);
      return {
        ...state,
        list: newList,
      };
    case ACTIONS.TODO_HIDE_COMPLETED:
      return {
        ...state,
        hideCompleted: !state.hideCompleted,
      };
    case ACTIONS.TODO_FILTER:
      return {
        ...state,
        filter: payload.value,
      };
    case ACTIONS.TODO_TASK_TOGGLE:
      const newTasks = state.list.map((todo) => {
        if (todo.id === payload.value) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        ...state,
        list: newTasks,
      };
  }
};
