import { useEffect, useMemo, useState } from "react";

const SimpleUseMemo = () => {
  const [isDark, setDark] = useState(false);
  const [inputValue, setInputValue] = useState("");

  console.log("Component Rerender");
  let computedValue = useMemo(() => {
    console.log("computing value");
    return inputValue * 10;
  }, [inputValue]);
  console.log(computedValue);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => setDark((prevVal) => !prevVal)}
      />
    </div>
  );
};

export default SimpleUseMemo;
