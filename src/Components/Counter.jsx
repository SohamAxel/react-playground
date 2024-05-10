import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          setCount((oldCount) => oldCount + 1);
        }}
      >
        +1
      </button>
    </>
  );
};

export default Counter;
