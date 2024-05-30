import { useDeferredValue, useState, useTransition } from "react";
import SlowChild from "./SlowChild";

function App() {
  const [value, setValue] = useState("");
  const deferedQuery = useDeferredValue(value);
  const [tab, setTab] = useState("post");
  const [isPending, setTransition] = useTransition();
  console.log("Original Value " + value);
  console.log("Defered Value " + deferedQuery);

  const handleChangeTab = (tab) => {
    setTransition(() => {
      setTab(tab);
    });
  };

  return (
    <>
      <input
        type="text"
        name="name"
        id="name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* <SlowChild value={deferedQuery} /> */}
      <button onClick={() => handleChangeTab("post")}>Post</button>
      <button onClick={() => handleChangeTab("comments")}>Comments</button>
      <button onClick={() => handleChangeTab("users")}>Author</button>
      {tab == "post" ? (
        <h1>Post</h1>
      ) : tab == "comments" ? (
        <SlowChild value={50000} />
      ) : (
        <h1>Users</h1>
      )}
    </>
  );
}

export default App;
