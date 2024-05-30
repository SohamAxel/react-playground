import React, { useEffect, useState } from "react";

const SimpleCounter = () => {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  useEffect(() => {
    console.log("inside counter use effect");
  }, []);
  return (
    <div>
      <button onClick={() => setCounterB((c) => c - 1)}>-</button>
      {counterB}
      <button onClick={() => setCounterB((c) => c + 1)}>+</button>
    </div>
  );
};

export default SimpleCounter;
