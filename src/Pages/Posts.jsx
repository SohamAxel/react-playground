import React from "react";
import PostCard from "../Components/PostCard";
import { useLoaderData } from "react-router";

const Posts = () => {
  const postData = useLoaderData();
  // console.log(postData);
  return (
    <div className="container">
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {postData.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
