import React, { useCallback, useEffect, useState } from "react";

const HookUseCallback = ({ parentState }) => {
  const [input, setInput] = useState("");

  const myFunction = useCallback(() => {
    console.log(`my function running ${input}`);
  }, [parentState]);

  useEffect(() => {
    console.log("useeffect of function");
  }, [myFunction]);
  //-------
  myFunction();
  console.log(`new input - ${input}`);
  //-------
  return (
    <div>
      HookUseCallback
      <input
        type="text"
        name="name"
        id="name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default HookUseCallback;
