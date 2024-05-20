import React from "react";
import { Link } from "react-router-dom";
import SearchBookForm from "./SearchBookForm";

const RootNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img
              src="https://openlibrary.org/static/images/openlibrary-logo-tighter.svg"
              alt="openlibrary-logo"
              width="189"
              height="47"
            />
          </Link>
        </li>
        <li>
          <Link to="/books/me">My Books</Link>
        </li>
        <li>
          <Link to="/books/me">Browse</Link>
        </li>
        <li>
          <SearchBookForm />
        </li>
      </ul>
    </nav>
  );
};

export default RootNav;
