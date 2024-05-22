import React, { useCallback, useEffect, useRef, useState } from "react";

const CallbackRef = () => {
  const [hideInput, setHideInput] = useState(true);
  const [someState, setSomeState] = useState(true);
  // const inputRef = useRef();

  // useEffect(() => {
  //   if (inputRef.current != null) {
  //     inputRef.current.focus();
  //   }
  // }, [hideInput]);
  const printMe = useCallback(() => {
    console.log("component");
  }, []);

  printMe();

  const inputRef = useCallback((input) => {
    console.log("callback run - " + Math.floor(Math.random() * 100));
    if (input !== null) {
      input.focus();
    }
  }, []);

  return (
    <div>
      <button onClick={(e) => setSomeState((d) => !d)}>
        Toggle Some State
      </button>
      <button onClick={(e) => setHideInput((d) => !d)}>Toggle</button>
      {!hideInput && <input type="text" ref={inputRef} />}
    </div>
  );
};

export default CallbackRef;
