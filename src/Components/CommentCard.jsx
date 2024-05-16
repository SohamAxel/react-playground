import React from "react";

const CommentCard = ({ body, email }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="text-sm mb-1">{email}</div>
        {body}
      </div>
    </div>
  );
};

export default CommentCard;
