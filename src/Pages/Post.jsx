import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import CommentCard from "../Components/CommentCard";
import { getPost } from "../apis/getPost";
import { getComments } from "../apis/getComment";
import { getUser } from "../apis/getUser";

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

const loader = async ({ params: { postId }, request: { signal } }) => {
  const comment = getComments(postId, { signal });
  const post = await getPost(postId, { signal });
  const user = getUser(post.userId, { signal });
  // In this case the comment and post api will be called simultaneously, but the user api will be called only after
  // post api is resolved.
  // In return as we know post has already resolved, so we need await for comment and user api call.
  return {
    commentDetails: await comment,
    postDetails: post,
    userDetails: await user,
  };
  // In this case each api call happens one after other which slows down the component loading
  // const comment = await getComments(postId, { signal });
  // const post = await getPost(postId, { signal });
  // const user = await (post.userId, { signal });
  // return {
  //   commentDetails: comment,
  //   postDetails: post,
  //   userDetails: user,
  // };
};

export const postRoute = {
  element: <Post />,
  loader,
};
