import React, { useState, useTransition } from "react";
import SlowChild from "./SlowChild";

const HookUseTransition = () => {
  const [tab, setTab] = useState("post");
  const [isPending, setTransition] = useTransition();

  const handleChangeTab = (tab) => {
    setTransition(() => {
      setTab(tab);
    });
  };

  return (
    <div>
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
    </div>
  );
};

export default HookUseTransition;
