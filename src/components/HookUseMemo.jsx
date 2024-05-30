import React, { useMemo } from "react";

const HookUseMemo = ({ parentState }) => {
  const myFunction = useMemo(() => {
    return Math.floor(Math.random() * 100);
  }, [parentState]);

  console.log(myFunction);

  return <div>HookUseMemo</div>;
};

export default HookUseMemo;
