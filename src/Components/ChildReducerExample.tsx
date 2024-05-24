import React, { useReducer } from "react";

type State = {
  count: number;
};

type Action =
  | {
      type: "INCREMENT";
      increaseBy: number;
    }
  | {
      type: "DECREMENT";
      decreaseBy: number;
    };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.increaseBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decreaseBy,
      };
    default:
      return state;
  }
};

const ChildReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <button onClick={() => dispatch({ type: "DECREMENT", decreaseBy: 2 })}>
        -
      </button>
      {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT", increaseBy: 2 })}>
        +
      </button>
    </div>
  );
};

export default ChildReducerExample;
