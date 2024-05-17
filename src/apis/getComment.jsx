export const getComments = (postId, options) => {
  return fetch(`http://127.0.0.1:3000/posts/${postId}/comments`, options).then(
    (response) => {
      if (response.status == 200) return response.json();
      throw redirect("/posts");
    }
  );
};
export const getComment = (commentId, options) => {
  return fetch(`http://127.0.0.1:3000/comments/${commentId}`, options).then(
    (response) => {
      if (response.status == 200) return response.json();
      throw redirect("/posts");
    }
  );
};
