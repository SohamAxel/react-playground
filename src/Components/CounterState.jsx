import { useState } from "react";

function CounterState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      {count}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default CounterState;
