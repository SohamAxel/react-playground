import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import CommentCard from "../Components/CommentCard";

const Post = () => {
  const { postId } = useParams();
  const { postDetails, commentDetails, userDetails } = useLoaderData();
  const { body, id, title, userId } = postDetails;

  return (
    <>
      <h1 className="page-title">{title}</h1>
      <span className="page-subtitle">
        By:{" "}
        <Link to={`/users/${userDetails.id.toString()}`}>
          {userDetails.name}
        </Link>
      </span>
      <div>{body}</div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {commentDetails.map((comment) => (
          <CommentCard key={comment.id} {...comment} />
        ))}
      </div>
    </>
  );
};

const loader = async ({ params, request }) => {
  let postData = {};
  await fetch(`http://127.0.0.1:3000/posts/${params.postId}`, {
    signal: request.signal,
  })
    .then((response) => {
      if (response.status == 200) return response.json();
      throw redirect("/posts");
    })
    .then(async (data) => {
      postData.postDetails = data;
    });

  await fetch(`http://127.0.0.1:3000/comments?postId=${params.postId}`, {
    signal: request.signal,
  })
    .then((response) => {
      if (response.status == 200) return response.json();
      throw redirect("/posts");
    })
    .then(async (data) => {
      postData.commentDetails = data;
    });

  await fetch(`http://127.0.0.1:3000/users/${postData.postDetails.userId}`, {
    signal: request.signal,
  })
    .then((response) => {
      if (response.status == 200) return response.json();
      throw redirect("/posts");
    })
    .then(async (data) => {
      postData.userDetails = data;
    });

  return new Response(JSON.stringify(postData), {
    status: 200,
    headers: {
      "Content-Type": "application/json; utf-8",
    },
  });
};

export const postRoute = {
  element: <Post />,
  loader,
};
