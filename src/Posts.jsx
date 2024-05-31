import React, { Suspense } from "react";
import wait from "./wait";
import { Await, defer, useLoaderData, useAsyncValue } from "react-router";

const Posts = () => {
  const { dataPromise } = useLoaderData();

  // return <div>Posts - {data}</div>;
  return (
    <>
      Posts -
      <Suspense fallback={"Loading"}>
        <Await resolve={dataPromise}>
          <Component />
        </Await>
      </Suspense>
    </>
  );
};

const Component = () => {
  const data = useAsyncValue();
  return <span>{data}</span>;
};

const loader = ({ request, param }) => {
  // return wait({ data: "Loaded" }, 5000);
  return defer({ dataPromise: wait("Loaded", 1000) });
};

const postLoader = {
  loader,
  element: <Posts />,
};

export default postLoader;
