import React from "react";
import { useLoaderData } from "react-router-dom";
import PostCard from "../Components/PostCard";
import { getUser } from "../apis/getUser";
import { getTodos } from "../apis/getTodo";
import { getPostFromUserId } from "../apis/getPost";

const User = () => {
  const { userDetails, postDetails, todoDetails } = useLoaderData();
  const { id, name, email, company, website, address } = userDetails;

  return (
    <>
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
    </>
  );
};

const loader = async ({ params, request }) => {
  const user = getUser(params.userId, { signal: request.signal });
  const todos = getTodos(params.userId, {
    signal: request.signal,
  });
  const post = getPostFromUserId(params.userId, { signal: request.signal });

  return {
    userDetails: await user,
    todoDetails: await todos,
    postDetails: await post,
  };
};

export const userRoute = {
  element: <User />,
  loader,
};
