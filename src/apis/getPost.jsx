export const getPosts = (options) => {
  return fetch(`http://127.0.0.1:3000/posts`, options).then((response) => {
    if (response.status == 200) return response.json();
    throw redirect("/posts");
  });
};
export const getPost = (postId, options) => {
  return fetch(`http://127.0.0.1:3000/posts/${postId}`, options).then(
    (response) => {
      if (response.status == 200) return response.json();
      throw redirect("/posts");
    }
  );
};
export const getPostFromUserId = (userId, options) => {
  return fetch(`http://127.0.0.1:3000/posts?userId=${userId}`, options).then(
    (response) => {
      if (response.status == 200) return response.json();
      throw redirect("/posts");
    }
  );
};
