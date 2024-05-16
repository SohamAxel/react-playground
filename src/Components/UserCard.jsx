import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ name, email, company, website, id }) => {
  return (
    <div className="card">
      <div className="card-header">{name}</div>
      <div className="card-body">
        <div>{website}</div>
        <div>{company.name}</div>
        <div>{email}</div>
      </div>
      <div className="card-footer">
        <Link className="btn" to={`/users/${id.toString()}`}>
          View
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
