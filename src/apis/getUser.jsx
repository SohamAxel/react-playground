export const getUsers = (options) => {
  return fetch(`http://127.0.0.1:3000/users`, options).then((response) => {
    if (response.status == 200) return response.json();
    throw redirect("/posts");
  });
};
export const getUser = (userId, options) => {
  return fetch(`http://127.0.0.1:3000/users/${userId}`, options).then(
    (response) => {
      if (response.status == 200) return response.json();
      throw redirect("/posts");
    }
  );
};
