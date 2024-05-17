export const getTodos = (userId, options) => {
  return fetch(`http://127.0.0.1:3000/todos?userId=${userId}`, options).then(
    (response) => {
      if (response.status == 200) return response.json();
      throw redirect("/posts");
    }
  );
};
