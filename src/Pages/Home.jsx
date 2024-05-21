import React from "react";
import { useLoaderData } from "react-router-dom";
import { getBooksBySubject } from "../apis/getBooks";
import BooksGenreSlider from "../Components/BooksGenreSlider";

const Home = () => {
  const { param, crimeData, loveData, thrillerData } = useLoaderData();

  return (
    <>
      <BooksGenreSlider
        {...param}
        subject="crime"
        initialBooks={crimeData.works}
        heading="Crime"
      />
      <BooksGenreSlider
        {...param}
        subject="love"
        initialBooks={loveData.works}
        heading="Romance"
      />
      <BooksGenreSlider
        {...param}
        subject="thriller"
        initialBooks={thrillerData.works}
        heading="Thrillers"
      />
    </>
  );
};
const loader = async () => {
  const offset = 0;
  const limit = 12;
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
    thrillerData: await getBooksBySubject("thriller", {
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
