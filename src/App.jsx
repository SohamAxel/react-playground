import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <Counter initialCount={0} />
    </>
  );
}

export default App;
