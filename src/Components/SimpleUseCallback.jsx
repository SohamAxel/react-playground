import { useCallback, useEffect, useState } from "react";

const SimpleUseCallback = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  // Normal functions/variable are re-created every time component re-renders, hence normal function is used
  // useEffect will run every time which is not required.
  // const printName = () => {
  //   console.log(name);
  // };

  // Now we have merged our callback's dependency with the callback, and if this callback is used as a dependency
  // in other places it will indirectly have all the callback's dependency and work only when the dependency changes.
  const printName = useCallback(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    printName();
  }, [printName]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </div>
  );
};

export default SimpleUseCallback;
