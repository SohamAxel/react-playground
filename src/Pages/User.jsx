import React from "react";
import { useLoaderData } from "react-router-dom";
import PostCard from "../Components/PostCard";

const User = () => {
  const { userDetails, postDetails, todoDetails } = useLoaderData();
  const { id, name, email, company, website, address } = userDetails;

  return (
    <div className="container">
      <h1 className="page-title">{name}</h1>
      <div className="page-subtitle">{email}</div>
      <div>
        <b>Company:</b> {company.name}
      </div>
      <div>
        <b>Website:</b> {website}
      </div>
      <div>
        <b>Address:</b> {address.street} {address.suite}, {address.city},{" "}
        {address.zipcode}
      </div>
      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        {postDetails.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        {todoDetails.map((todo) => (
          <li key={todo.id} className={todo.completed ? "strike-through" : ""}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
