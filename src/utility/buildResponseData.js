import { redirect } from "react-router-dom";

const getPostDetails = async ({ params, request }) => {
  let postData = {};
  await fetch(`http://127.0.0.1:3000/posts/${params.postId}`, {
    signal: request.signal,
  })
    .then((response) => {
      if (response.status == 200) return response.json();
      throw redirect("/posts");
    })
    .then(async (data) => {
      postData.postDetails = data;
    });

  await fetch(`http://127.0.0.1:3000/comments?postId=${params.postId}`, {
    signal: request.signal,
  })
    .then((response) => {
      if (response.status == 200) return response.json();
      throw redirect("/posts");
    })
    .then(async (data) => {
      postData.commentDetails = data;
    });

  await fetch(`http://127.0.0.1:3000/users/${postData.postDetails.userId}`, {
    signal: request.signal,
  })
    .then((response) => {
      if (response.status == 200) return response.json();
      throw redirect("/posts");
    })
    .then(async (data) => {
      postData.userDetails = data;
    });

  return new Response(JSON.stringify(postData), {
    status: 200,
    headers: {
      "Content-Type": "application/json; utf-8",
    },
  });
};

const getUserDetails = async ({ params, request }) => {
  let userData = {};
  await fetch(`http://127.0.0.1:3000/users/${params.userId}`, {
    signal: request.signal,
  })
    .then((response) => {
      if (response.status == 200) return response.json();
      throw redirect("/posts");
    })
    .then(async (data) => {
      userData.userDetails = data;
    });

  await fetch(`http://127.0.0.1:3000/todos?userId=${params.userId}`, {
    signal: request.signal,
  })
    .then((response) => {
      if (response.status == 200) return response.json();
      throw redirect("/posts");
    })
    .then(async (data) => {
      userData.todoDetails = data;
    });

  await fetch(`http://127.0.0.1:3000/posts?userId=${params.userId}`, {
    signal: request.signal,
  })
    .then((response) => {
      if (response.status == 200) return response.json();
      throw redirect("/posts");
    })
    .then(async (data) => {
      userData.postDetails = data;
    });

  return new Response(JSON.stringify(userData), {
    status: 200,
    headers: {
      "Content-Type": "application/json; utf-8",
    },
  });
};

export { getPostDetails, getUserDetails };
