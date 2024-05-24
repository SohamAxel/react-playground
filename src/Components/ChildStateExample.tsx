import { useState } from "react";

const ChildStateExample = () => {
  const [value, setValue] = useState<string>();
  // const [value, setValue] = useState<string>("");
  const [valueArr, setValueArr] = useState<string[]>();
  // const [valueArr, setValueArr] = useState(["abc"]);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default ChildStateExample;
