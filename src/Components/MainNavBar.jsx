import React from "react";
import { Link } from "react-router-dom";

const MainNavBar = () => {
  return (
    <nav className="top-nav">
      <div className="nav-text-large">My App</div>
      <ul className="nav-list">
        <li>
          <Link to="posts">Posts</Link>
        </li>
        <li>
          <Link to="users">Users</Link>
        </li>
        <li>
          <Link to="todos">Todos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavBar;
