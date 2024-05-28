import React, { memo, useEffect, useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <button onClick={() => setCount((d) => d - 1)}>-</button>
      <div>{count}</div>
      <button onClick={() => setCount((d) => d + 1)}>+</button>
    </>
  );
};

export default Counter;
