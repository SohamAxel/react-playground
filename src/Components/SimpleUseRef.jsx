import { useEffect, useRef } from "react";

const SimpleUseRef = () => {
  useEffect(() => {
    inputRef.current.focus();
  });
  const inputRef = useRef();
  return (
    <div>
      <input type="text" ref={inputRef} name="" id="" />
    </div>
  );
};

export default SimpleUseRef;
