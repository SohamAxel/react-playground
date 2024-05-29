import React, { ReactElement, ReactNode } from "react";
import { Dispatch, createContext, useContext, useReducer } from "react";

type Actions = {
  type: "INCREMENT" | "DECREMENT";
};

type State = {
  count: number;
};

const reducer = (value: State, actions: Actions): State => {
  switch (actions.type) {
    case "INCREMENT":
      return { count: value.count + 1 };
    case "DECREMENT":
      return { count: value.count - 1 };
    default:
      return value;
  }
};
type TCounterContext = {
  count: number;
  dispatch: Dispatch<Actions>;
};

const Context = createContext<TCounterContext | null>(null);

export const useCounterContext = () => {
  const value = useContext(Context);
  if (value == null) {
    throw new Error("Should be inside context provider");
  }
  return value;
};

export default function CounterProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <Context.Provider value={{ count: state.count, dispatch }}>
      {children}
    </Context.Provider>
  );
}
