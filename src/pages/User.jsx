import { Await, defer, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts";
import { getTodos } from "../api/todos";
import { getUser } from "../api/users";
import { PostCard, SkeletonPostCard } from "../components/PostCard";
import { TodoItem, TodoItemSkeleton } from "../components/TodoItem";
import { Suspense } from "react";

function User() {
  const { userPromise, postsPromise, todosPromise } = useLoaderData();

  return (
    <>
      <Suspense
        fallback={
          <>
            <h1 className="skeleton"></h1>
            <div className="page-skeleton"></div>
            <div>
              <b>Company:</b>{" "}
              <div
                style={{ display: "inline-block" }}
                className="skeleton"
              ></div>
            </div>
            <div>
              <b>Website:</b>{" "}
              <div
                style={{ display: "inline-block" }}
                className="skeleton"
              ></div>
            </div>
            <div>
              <b>Address:</b>{" "}
              <div
                style={{ display: "inline-block" }}
                className="skeleton"
              ></div>
            </div>
          </>
        }
      >
        <Await resolve={userPromise}>
          {(user) => (
            <>
              <h1 className="page-title">{user.name}</h1>
              <div className="page-subtitle">{user.email}</div>
              <div>
                <b>Company:</b> {user.company.name}
              </div>
              <div>
                <b>Website:</b> {user.website}
              </div>
              <div>
                <b>Address:</b> {user.address.street} {user.address.suite}{" "}
                {user.address.city} {user.address.zipcode}
              </div>
            </>
          )}
        </Await>
      </Suspense>

      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        <Suspense
          fallback={Array.from(Array(6).keys()).map((e) => (
            <SkeletonPostCard key={e} />
          ))}
        >
          <Await resolve={postsPromise}>
            {(posts) =>
              posts.map((post) => <PostCard key={post.id} {...post} />)
            }
          </Await>
        </Suspense>
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        <Suspense
          fallback={Array.from(Array(26).keys()).map((e) => (
            <TodoItemSkeleton />
          ))}
        >
          <Await resolve={todosPromise}>
            {(todos) =>
              todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
            }
          </Await>
        </Suspense>
      </ul>
    </>
  );
}

async function loader({ request: { signal }, params: { userId } }) {
  const posts = getPosts({ signal, params: { userId } });
  const todos = getTodos({ signal, params: { userId } });
  const user = getUser(userId, { signal });

  return defer({ postsPromise: posts, todosPromise: todos, userPromise: user });
}

export const userRoute = {
  loader,
  element: <User />,
};
