import { useEffect, useRef } from "react";

const SimpleForm = () => {
  const inputRef = useRef("Default Value");
  useEffect(() => {
    console.log("re-render");
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(inputRef.current.value);
      }}
    >
      <input type="text" ref={inputRef} />
      <button>Alert</button>
    </form>
  );
};

export default SimpleForm;
