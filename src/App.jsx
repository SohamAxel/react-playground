import { useState } from "react";
import Child from "./Components/Child";
import ChildClass from "./Components/ChildClass";

function App() {
  const [show, setShow] = useState(true);

  const childComponent = show ? <Child /> : null;

  return (
    <>
      <button onClick={() => setShow((currentShow) => !currentShow)}>
        Show/Hide
      </button>
      {childComponent}
    </>
  );
}

export default App;
