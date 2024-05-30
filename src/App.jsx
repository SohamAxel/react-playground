import { useState } from "react";
import HookUseCallback from "./components/HookUseCallback";
import SimpleCounter from "./components/SimpleCounter";
import HookUseMemo from "./components/HookUseMemo";

function App() {
  const [input, setInput] = useState("");
  const [state, setState] = useState(0);
  const [toggleCounter, setToggleCounter] = useState(true);
  return (
    <>
      <h1>Hello</h1>
      <input
        type="text"
        name="name"
        id="name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>
        <button onClick={() => setToggleCounter((t) => !t)}>Toggle</button>
        {toggleCounter && <SimpleCounter />}
      </div>
      <button onClick={() => setState((c) => c + 1)}>{state}</button>
      <HookUseCallback parentState={state} />
      <HookUseMemo parentState={state} />
    </>
  );
}

export default App;
