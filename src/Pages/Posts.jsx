import React from "react";
import PostCard from "../Components/PostCard";
import { useLoaderData } from "react-router";
import { getPosts } from "../apis/getPost";

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
  return getPosts({ signal: request.signal });
};

export const postListRoute = {
  element: <Posts />,
  loader,
};
