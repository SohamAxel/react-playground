import React, { useRef, useEffect } from "react";
import { Form, Link } from "react-router-dom";

const PostForm = ({ users, post, error, isLoading }) => {
  const titleRef = useRef();
  const selectRef = useRef();
  const bodyRef = useRef();

  useEffect(() => {
    if (post !== undefined) {
      titleRef.current.value = post.title;
      selectRef.current.value = post.userId;
      bodyRef.current.value = post.body;
    }
  }, [post]);

  return (
    <Form method="post" className="form">
      <div className="form-row">
        <div
          className={`form-group ${error?.titleError?.error ? "error" : ""}`}
        >
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" ref={titleRef} />
          {error?.titleError?.error && (
            <div className="error-message">{error?.titleError?.message}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="userId">Author</label>
          <select name="userId" id="userId" ref={selectRef}>
            {users.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body" ref={bodyRef}></textarea>
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
