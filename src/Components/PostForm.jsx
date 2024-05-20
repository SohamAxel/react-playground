import React, { useRef, useEffect } from "react";
import { Form, Link } from "react-router-dom";

const PostForm = ({ users, post, error = {}, isLoading }) => {
  const titleRef = useRef();
  const selectRef = useRef();
  const bodyRef = useRef();

  return (
    <Form method="post" className="form">
      <div className="form-row">
        <div className={`form-group ${error.title ? "error" : ""}`}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            ref={titleRef}
            defaultValue={post.title}
          />
          {error.title && <div className="error-message">{error.title}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="userId">Author</label>
          <select
            name="userId"
            id="userId"
            defaultValue={post.userId}
            ref={selectRef}
          >
            {users.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className={`form-group ${error.body ? "error" : ""}`}>
          <label htmlFor="body">Body</label>
          <textarea
            name="body"
            id="body"
            defaultValue={post.body}
            ref={bodyRef}
          ></textarea>
          {error.body && <div className="error-message">{error.body}</div>}
        </div>
      </div>
      <div className="form-row form-btn-row">
        <Link className="btn btn-outline" to="..">
          Cancel
        </Link>
        <button className="btn" disabled={isLoading}>
          {isLoading ? "Loading" : "Save"}
        </button>
      </div>
    </Form>
  );
};

export default PostForm;

export const postFromValidator = ({ body, title, userId }) => {
  const error = {};
  if (title === "") {
    error.title = "Required";
  }
  if (body === "") {
    error.body = "Required";
  }
  if (userId === "") {
    error.userId = "Required";
  }

  return error;
};
