import React, { useRef, useState } from "react";
import BookCard from "../Components/BookCard";
import { getBooksBySubject } from "../apis/getBooks";
import Slider from "react-slick";

const BooksGenreSlider = ({
  initialBooks,
  subject,
  fields,
  limit,
  heading,
}) => {
  const [booksData, setBooksData] = useState(initialBooks);
  const [isDataLoading, setDataLoading] = useState(false);
  const noMoreData = useRef(initialBooks.length < limit);
  const pageNumber = useRef(1);
  const settings = {
    autoplay: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const fetchData = async () => {
    setDataLoading(true);
    const response = await getBooksBySubject(subject, {
      fields,
      offset: (pageNumber.current - 1) * limit,
      limit,
    });
    console.log(response.works);
    if (response.works.length < limit) {
      noMoreData.current = true;
    }
    setBooksData((prevData) => [...prevData, ...response.works]);
    setDataLoading(false);
  };

  const handleClick = () => {
    pageNumber.current = pageNumber.current + 1;
    fetchData();
  };

  return (
    <>
      <section>
        <div id="slider-head" className="p-5">
          <h1 className="font-bold text-lg">{heading}</h1>
        </div>
        <div className="bg-slider pl-12 pr-12">
          <Slider {...settings}>
            {booksData.map((book) => {
              console.log(book.availability?.is_readable);
              return (
                <BookCard
                  key={book.cover_id}
                  id={book.cover_id}
                  title={book.title}
                  is_readable={book.availability?.is_readable ? true : false}
                />
              );
            })}
            {noMoreData.current ? undefined : (
              <div>
                <button onClick={handleClick} disabled={isDataLoading}>
                  {isDataLoading ? "Loading ..." : "Load More ..."}
                </button>
              </div>
            )}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default BooksGenreSlider;
