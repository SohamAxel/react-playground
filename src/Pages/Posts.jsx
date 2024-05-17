import React from "react";
import PostCard from "../Components/PostCard";
import { useLoaderData } from "react-router";

const Posts = () => {
  const postData = useLoaderData();
  // console.log(postData);
  return (
    <>
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {postData.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};

const loader = ({ request }) => {
  return fetch("http://127.0.0.1:3000/posts", {
    signal: request.signal,
  });
};

export const postListRoute = {
  element: <Posts />,
  loader,
};
