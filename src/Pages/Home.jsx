import React from "react";
import { useLoaderData } from "react-router-dom";
import { getBooksBySubject } from "../apis/getBooks";
import BooksGenreSlider from "../Components/BooksGenreSlider";

const Home = () => {
  const { param, crimeData, loveData, kidData } = useLoaderData();

  return (
    <>
      <div>
        <h1>Crime and Thriller</h1>
        <BooksGenreSlider
          {...param}
          subject="crime"
          initialBooks={crimeData.works}
        />
      </div>
      <div>
        <h1>Romance</h1>
        <BooksGenreSlider
          {...param}
          subject="love"
          initialBooks={loveData.works}
        />
      </div>
      <div>
        <h1>Kids</h1>
        <BooksGenreSlider
          {...param}
          subject="kid"
          initialBooks={kidData.works}
        />
      </div>
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
      limit,
      fields,
    },
    crimeData: await getBooksBySubject("crime", {
      fields,
      offset,
      limit,
    }),
    loveData: await getBooksBySubject("love", {
      fields,
      offset,
      limit,
    }),
    kidData: await getBooksBySubject("kid", {
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
