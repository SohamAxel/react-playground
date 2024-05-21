import React, { useRef } from "react";
import { ForwardRefInput } from "./ForwardRefInput";

const ForwardRefComponent = () => {
  const inputRef = useRef();

  return (
    <>
      <ForwardRefInput ref={inputRef} />;
      <button onClick={() => console.log(inputRef.current.value)}>
        Submit
      </button>
    </>
  );
};

export default ForwardRefComponent;
