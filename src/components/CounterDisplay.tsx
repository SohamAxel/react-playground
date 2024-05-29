import React from "react";
import { useCounterContext } from "../contexts/CounterContext";

const CounterDisplay = () => {
  const { count } = useCounterContext();

  return <div>{count}</div>;
};

export default CounterDisplay;
