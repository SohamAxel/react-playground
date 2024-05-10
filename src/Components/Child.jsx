import { useEffect, useState } from "react";

const Child = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("Render");
  });

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log(`My name is ${name} and I am ${age} years old`);
  }, [name, age]);

  useEffect(() => {
    document.title = name;
  }, [name]);

  // print after 1s of change.
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(`My name is ${name}`);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    }
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={() => setAge((currentAge) => --currentAge)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => ++currentAge)}>+</button>
    </div>
  );
};

export default Child;
