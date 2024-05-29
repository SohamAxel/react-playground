import React from "react";
import { useCounterContext } from "../contexts/CounterContext";

const CounterUpdate = () => {
  const { dispatch } = useCounterContext();

  return (
    <div>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </div>
  );
};

export default CounterUpdate;
