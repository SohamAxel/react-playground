import React, { useEffect, useRef } from "react";
import { getUsers } from "../apis/getUser";
import {
  useLoaderData,
  useActionData,
  Form,
  redirect,
  useNavigation,
  useParams,
} from "react-router-dom";
import { createPost } from "../apis/updatePost";
import PostForm from "../Components/PostForm";

export const NewPost = () => {
  const { users } = useLoaderData();
  const error = useActionData();
  const { state } = useNavigation();
  const isLoading = state === "loading" || state === "submitting";

  return (
    <>
      <h1 className="page-title">New Post</h1>
      <PostForm users={users} error={error} isLoading={isLoading} />
    </>
  );
};

const loader = async ({ request: { signal, url } }) => {
  return {
    users: await getUsers({ signal }),
    url,
  };
};

const action = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");

  if (title === "") {
    return {
      titleError: {
        error: true,
        message: "Required",
      },
    };
  }
  const body = formData.get("body");
  const userId = formData.get("userId");

  const response = await createPost(
    { title, body, userId },
    { signal: request.signal }
  );

  return redirect(`/posts/${response.id}`);
};

export const newPostRoute = {
  element: <NewPost />,
  loader,
  action,
};
