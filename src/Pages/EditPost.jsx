import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { getPost } from "../apis/getPost";
import { getUsers } from "../apis/getUser";
import { updatePost } from "../apis/updatePost";
import PostForm from "../Components/PostForm";

const EditPost = () => {
  const { users, post } = useLoaderData();
  const error = useActionData();
  const { state } = useNavigation();
  const isLoading = state === "loading" || state === "submitting";

  return (
    <>
      <h1 className="page-title">Edit Post</h1>
      <PostForm users={users} post={post} error={error} isLoading={isLoading} />
    </>
  );
};

const loader = async ({ request: { signal }, params: { postId } }) => {
  let users = getUsers({ signal });
  let post = getPost(postId, { signal });

  return {
    users: await users,
    post: await post,
  };
};

const action = async ({ request, params: { postId } }) => {
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

  const response = await updatePost(
    postId,
    { title, body, userId },
    { signal: request.signal }
  );

  return redirect(`/posts/${response.id}`);
};

export const editPostRoute = {
  element: <EditPost />,
  loader,
  action,
};
