import React from "react";
import { useLoaderData } from "react-router-dom";
import UserCard from "../Components/UserCard";

const Users = () => {
  const users = useLoaderData();

  return (
    <div className="container">
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
