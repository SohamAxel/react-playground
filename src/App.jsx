import { useState } from "react";
import ReactLazy from "./ReactLazy";
import RouterComponent from "./RouterComponent";

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
      <RouterComponent />
    </>
  );
}

export default App;
