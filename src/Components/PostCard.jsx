import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ body, id, title, userId }) => {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="card-preview-text">{body}</div>
      </div>
      <div className="card-footer">
        <Link className="btn" to={`/posts/${id.toString()}`}>
          View
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
