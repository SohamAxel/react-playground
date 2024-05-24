import React, { createContext, useContext, useEffect, useState } from "react";

export type User = {
  id: string;
  name: string;
  age: number;
};

type ContextType = {
  users: User[];
  addUser: ({ name, age }: { name: string; age: number }) => void;
};

export const Context = createContext<ContextType | null>(null);

export const getUserContext = () => {
  const userContext = useContext(Context);
  if (userContext === null) {
    throw Error("Users are null");
  }

  return userContext;
};

const ChildContextExample = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  function addUser({ name, age }: { name: string; age: number }) {
    setUsers((prevUsers) => {
      return [...prevUsers, { id: crypto.randomUUID(), name, age }];
    });
  }

  return (
    <Context.Provider value={{ users, addUser }}>
      <ChildDisplay />
    </Context.Provider>
  );
};

const getUsers = () => {
  return Promise.resolve([
    { id: crypto.randomUUID(), name: "Stacy", age: 28 },
    { id: crypto.randomUUID(), name: "Sal", age: 42 },
  ]);
};

export default ChildContextExample;
