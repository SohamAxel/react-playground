import { useState } from "react";
import Counter from "./Components/Counter";
import ArrayStateProject from "./Components/ArrayStateProject";

const slowFunction = () => {
  // Very slow function
  return "John Doe";
};

function App() {
  const [name, setName] = useState("John Doe");

  const clickHandler = () => {
    setName("Jane Doe");
  };

  return (
    <>
      <h1 onClick={clickHandler}>Hi {name}</h1>
      <Counter />
      <ArrayStateProject />
    </>
  );
}

export default App;
