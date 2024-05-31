import { useState } from "react";
import HookUseDeferedValue from "./HookUseDeferedValue";
import HookUseTransition from "./HookUseTransition";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        name="name"
        id="name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <HookUseDeferedValue value={value} />
      <HookUseTransition />
    </>
  );
}

export default App;
