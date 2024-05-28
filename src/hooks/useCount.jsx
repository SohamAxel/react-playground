import { useState } from "react";

export const useCount = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };

  return { count, increment, decrement };
};
