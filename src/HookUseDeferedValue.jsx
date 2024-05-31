import React, { useDeferredValue } from "react";
import SlowChild from "./SlowChild";

const HookUseDeferedValue = ({ value }) => {
  const deferedQuery = useDeferredValue(value);
  console.log("Original Value " + value);
  console.log("Defered Value " + deferedQuery);
  return <SlowChild value={20000} />;
};

export default HookUseDeferedValue;
