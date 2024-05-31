import React from "react";
import wait from "./wait";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { data } = useLoaderData();
  return <div>Home - {data}</div>;
};

const loader = ({ request, params }) => {
  return wait({ data: "Loaded" }, 1000);
};

const homeLoader = {
  element: <Home />,
  loader,
};

export default homeLoader;
