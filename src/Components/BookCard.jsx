import React from "react";

const BookCard = ({ id, title, is_readable }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={`https://covers.openlibrary.org/w/id/${id}-M.jpg`} />
      <button
        className={`p-2 
          ${is_readable ? "bg-blue-400" : "bg-slate-500"} 
          ${is_readable ? "text-black" : "text-white"}
          w-40 mt-2`}
        disabled={!is_readable}
      >
        {" "}
        {is_readable ? "Read Now" : "Not in library"}
      </button>
    </div>
  );
};

export default BookCard;
