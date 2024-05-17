import React from "react";
import PostCard from "../Components/PostCard";
import { useLoaderData, Link } from "react-router-dom";
import { getFilteredPost, getPosts } from "../apis/getPost";
import QueryForm from "../Components/QueryForm";
import { getUsers } from "../apis/getUser";

const Posts = () => {
  const { postData, users, q, userId } = useLoaderData();

  return (
    <>
      <h1 className="page-title">
        Posts
        <div className="title-btns">
          <Link className="btn btn-outline" to="/posts/new">
            New
          </Link>
        </div>
      </h1>
      <QueryForm users={users} q={q} userId={userId} />
      <div className="card-grid">
        {postData.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};

const loader = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const q = searchParams.get("query");
  const userId = searchParams.get("userId");
  let posts;
  if (q || userId) {
    let params = {};
    if (q !== "") {
      params.q = q;
    }
    if (userId !== "") {
      params.userId = userId;
    }
    posts = getFilteredPost({ signal: request.signal }, params);
  } else {
    posts = getPosts({ signal: request.signal });
  }
  const users = getUsers({ signal: request.signal });
  return {
    postData: await posts,
    users: await users,
    q,
    userId,
  };
};

export const postListRoute = {
  element: <Posts />,
  loader,
};
