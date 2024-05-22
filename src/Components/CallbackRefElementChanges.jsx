import React, { useState, useCallback } from "react";

const CallbackRefElementChanges = () => {
  const [toggle, setToggle] = useState(true);

  const elementRef = useCallback((element) => {
    if (element !== null) {
      console.log("Element mounted:", element);
    } else {
      console.log("Element unmounted");
    }
  }, []);

  return (
    <div>
      <button onClick={() => setToggle((prev) => !prev)}>Toggle Element</button>
      {toggle ? (
        <div
          ref={elementRef}
          style={{ background: "lightblue", padding: "10px" }}
        >
          I am a div
        </div>
      ) : (
        <span
          ref={elementRef}
          style={{ background: "lightgreen", padding: "10px" }}
        >
          I am a span
        </span>
      )}
    </div>
  );
};

export default CallbackRefElementChanges;
