import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import CommentCard from "../Components/CommentCard";

const Post = () => {
  const { postId } = useParams();
  const { postDetails, commentDetails, userDetails } = useLoaderData();
  const { body, id, title, userId } = postDetails;

  return (
    <div className="container">
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
    </div>
  );
};

export default Post;
