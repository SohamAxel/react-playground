import { useState } from "react";

const CounterWithNameProject = () => {
  const [name, setName] = useState("John Doe");
  const [count, setCount] = useState(0);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <button onClick={() => setCount((prevVal) => prevVal + 1)}>+1</button>
        {count}
        <button onClick={() => setCount((prevVal) => prevVal - 1)}>-1</button>
      </div>
      <h3>Hi, my name is {name}, counter: {count}</h3>
    </div>
  );
};

export default CounterWithNameProject;
