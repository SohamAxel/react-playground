import { useState } from "react";
import List from "./List";
import TodoForm from "./TodoForm";

const Todo = () => {
  const [lists, setList] = useState([]);

  return (
    <>
      <ul id="list">
        {lists.map((list, index) => (
          <List key={index} item={list} setList={setList} />
        ))}
      </ul>
      <TodoForm setList={setList} />
    </>
  );
};

export default Todo;
