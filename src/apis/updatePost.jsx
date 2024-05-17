export const createPost = (data, options) => {
  return fetch(`http://127.0.0.1:3000/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    ...options,
  }).then((res) => res.json());
};

export const updatePost = (postId, data, options) => {
  return fetch(`http://127.0.0.1:3000/posts/${postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    ...options,
  }).then((res) => res.json());
};
