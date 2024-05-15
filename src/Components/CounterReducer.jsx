import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  INCREMENT_BY: "INCREMENT_BY",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + 1;
    case ACTIONS.DECREMENT:
      return state - 1;
    case ACTIONS.RESET:
      return action.payload.value;
    case ACTIONS.INCREMENT_BY:
      return state + action.payload.value;
    default:
      return state;
  }
};

function CounterReducer({ initialValue = 0 }) {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.RESET, payload: { value: initialValue } })
        }
      >
        Reset
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.INCREMENT_BY, payload: { value: 5 } })
        }
      >
        +5
      </button>
    </div>
  );
}

export default CounterReducer;
