import React from "react";
import { useLoaderData } from "react-router-dom";
import UserCard from "../Components/UserCard";
import { getUsers } from "../apis/getUser";

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

const loader = ({ request: { signal } }) => {
  return getUsers({ signal });
};

export const userListRoute = {
  element: <Users />,
  loader,
};
