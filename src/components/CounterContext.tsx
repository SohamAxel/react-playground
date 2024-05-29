import React from "react";
import CounterDisplay from "./CounterDisplay";
import CounterUpdate from "./CounterUpdate";
import CounterProvider from "../contexts/CounterContext";

const CounterContext = () => {
  return (
    <CounterProvider>
      <CounterDisplay />
      <CounterUpdate />
    </CounterProvider>
  );
};

export default CounterContext;
