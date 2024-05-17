export const getPosts = (options) => {
  return fetch("http://127.0.0.1:3000/users", options);
};
