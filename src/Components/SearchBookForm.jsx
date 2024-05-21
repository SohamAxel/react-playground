import React from "react";
import { Form } from "react-router-dom";
import { searchByOptions } from "../utility/searchOptions";

const SearchBookForm = () => {
  const searchBy = searchByOptions;

  return (
    <Form action="/books/search">
      <select name="search-by" id="search-by">
        {searchBy.map((item) => (
          <option key={item.name} value={item.name}>
            {item.value}
          </option>
        ))}
      </select>
      <input
        type="search"
        name="search"
        id="search"
        className="p-1"
        placeholder="Search"
      />
      <button>
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
    </Form>
  );
};

export default SearchBookForm;
