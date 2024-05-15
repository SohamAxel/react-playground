import { ACTIONS } from "../Actions/todoAction";

export const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.TODO_ADD:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: crypto.randomUUID(),
            value: payload.value,
            completed: false,
          },
        ],
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
    case ACTIONS.TODO_UPDATE:
      const updatedLists = state.list.map((todo) => {
        if (todo.id === payload.of) {
          return {
            ...todo,
            ...payload.value,
          };
        }
        return todo;
      });

      return {
        ...state,
        list: updatedLists,
      };
    default:
      throw new Error(`No action found for ${type}`);
  }
};
