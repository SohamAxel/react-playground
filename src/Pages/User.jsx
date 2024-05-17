import React from "react";
import { useLoaderData } from "react-router-dom";
import PostCard from "../Components/PostCard";

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
  let userData = {};
  await fetch(`http://127.0.0.1:3000/users/${params.userId}`, {
    signal: request.signal,
  })
    .then((response) => {
      if (response.status == 200) return response.json();
      throw redirect("/posts");
    })
    .then(async (data) => {
      userData.userDetails = data;
    });

  await fetch(`http://127.0.0.1:3000/todos?userId=${params.userId}`, {
    signal: request.signal,
  })
    .then((response) => {
      if (response.status == 200) return response.json();
      throw redirect("/posts");
    })
    .then(async (data) => {
      userData.todoDetails = data;
    });

  await fetch(`http://127.0.0.1:3000/posts?userId=${params.userId}`, {
    signal: request.signal,
  })
    .then((response) => {
      if (response.status == 200) return response.json();
      throw redirect("/posts");
    })
    .then(async (data) => {
      userData.postDetails = data;
    });

  return new Response(JSON.stringify(userData), {
    status: 200,
    headers: {
      "Content-Type": "application/json; utf-8",
    },
  });
};

export const userRoute = {
  element: <User />,
  loader,
};
