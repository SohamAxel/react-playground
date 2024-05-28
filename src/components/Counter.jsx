import React, { memo, useEffect, useState } from "react";

const Component = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <button onClick={() => setCount((d) => d - 1)}>-</button>
      <div>{count}</div>
      <button onClick={() => setCount((d) => d + 1)}>+</button>
    </>
  );
};

// const Counter = memo(Component);
const Counter = memo(Component, (prevProps, newProps) => {
  // return true; // Props are same don't rerender
  // return false; // Props are not same do rerender÷
  return prevProps === newProps;
});

export default Counter;
