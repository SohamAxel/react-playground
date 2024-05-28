import React, { memo, useEffect, useState } from "react";
import { useCount } from "../hooks/useCount";

const Counter = ({ initialCount }) => {
  const { count, increment, decrement } = useCount(initialCount);

  return (
    <>
      <button onClick={increment}>-</button>
      <div data-testid="count">{count}</div>
      <button onClick={decrement}>+</button>
    </>
  );
};

export default Counter;
