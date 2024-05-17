import React from "react";
import { useLoaderData } from "react-router-dom";
import UserCard from "../Components/UserCard";

const Users = () => {
  const users = useLoaderData();

  return (
    <>
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </>
  );
};

const loader = ({ request }) => {
  return fetch("http://127.0.0.1:3000/users", {
    signal: request.signal,
  });
};

export const userListRoute = {
  element: <Users />,
  loader,
};
