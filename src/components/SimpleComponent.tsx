import React, { useEffect, useState } from "react";

const SimpleComponent = () => {
  const [state, setState] = useState(0);

  console.log("component rerenders");
  useEffect(() => {
    console.log("Use effect runnning");
  }, [state]);

  return (
    <>
      {state}
      <button onClick={(e) => setState((state) => state + 1)}>+1</button>
    </>
  );
};

export default SimpleComponent;
