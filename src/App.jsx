import { useState } from "react";
import HookUseDeferedValue from "./HookUseDeferedValue";
import HookUseTransition from "./HookUseTransition";
import ReactLazy from "./ReactLazy";

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
      {/* <HookUseDeferedValue value={value} /> */}
      {/* <HookUseTransition /> */}
      <ReactLazy />
    </>
  );
}

export default App;
