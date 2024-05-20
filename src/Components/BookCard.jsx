import React from "react";

const BookCard = ({ id, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={`https://covers.openlibrary.org/w/id/${id}-M.jpg`} />
    </div>
  );
};

export default BookCard;
