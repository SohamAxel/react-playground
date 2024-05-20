import React, { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBooksBySubject, getBooks } from "../apis/getBooks";
import BookCard from "../Components/BookCard";

const Home = () => {
  const { param, data } = useLoaderData();
  const { subject, fields, page, limit } = param;
  const [booksData, setBooksData] = useState(data.works);
  const [isDataLoading, setDataLoading] = useState(false);
  const pageNumber = useRef(page);

  const fetchData = async () => {
    setDataLoading(true);
    console.log(pageNumber.current);
    const response = await getBooksBySubject(subject, {
      fields,
      offset: (pageNumber.current - 1) * limit,
      limit,
    });
    console.log(response.works);
    setBooksData((prevData) => [...prevData, ...response.works]);
    setDataLoading(false);
    console.log(response);
  };
  const handleClick = () => {
    pageNumber.current = pageNumber.current + 1;
    fetchData();
  };

  return (
    <>
      <section>
        <div className="grid grid-cols-5">
          {booksData.map((book) => (
            <BookCard
              key={book.cover_id}
              id={book.cover_id}
              title={book.title}
            />
          ))}
        </div>
        <button onClick={handleClick} disabled={isDataLoading}>
          {isDataLoading ? "Loading ..." : "Load More ..."}
        </button>
      </section>
    </>
  );
};
const loader = async () => {
  const offset = 0;
  const limit = 5;
  const subject = "crime";
  const fields = "key,title,author_name,editions,cover_i";
  return {
    param: {
      page: 1,
      limit,
      fields,
      subject,
    },
    data: await getBooksBySubject("crime", {
      fields,
      offset,
      limit,
    }),
  };
};
export const homeRoute = {
  element: <Home />,
  loader,
};

export default Home;
