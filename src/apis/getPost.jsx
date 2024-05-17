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
export const getFilteredPost = (options, params) => {
  const query = new URLSearchParams(params);
  console.log(`http://127.0.0.1:3000/posts?${query.toString()}`);
  return fetch(`http://127.0.0.1:3000/posts?${query.toString()}`, options).then(
    (response) => {
      if (response.status == 200) return response.json();
      throw redirect("/posts");
    }
  );
};
