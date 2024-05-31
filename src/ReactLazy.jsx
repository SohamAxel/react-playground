import React, { useState, lazy, Suspense } from "react";
// import NewComment from "./NewComment";
// import Comments from "./Comments";
const Comments = lazy(() =>
  import("./Comments").then((module) => ({
    default: module.Comments,
  }))
);
const NewComment = lazy(() => import("./NewComment"));

const ReactLazy = () => {
  const [viewComments, setViewComments] = useState();
  const isLoggedIn = true;

  return (
    <>
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quod!
        Tempora laboriosam quam eum. Consequatur, quod. Aliquid sapiente
        quisquam voluptas laborum, libero architecto facere sed fuga maiores
        tempore ipsam ipsa.
      </article>
      {viewComments ? (
        <Suspense fallback={<h1>Loading</h1>}>
          {isLoggedIn && <NewComment />}
          <Comments />
        </Suspense>
      ) : (
        <button onClick={() => setViewComments(true)}>View Comments</button>
      )}
    </>
  );
};

export default ReactLazy;
