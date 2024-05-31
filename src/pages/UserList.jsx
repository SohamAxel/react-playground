import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { getUsers } from "../api/users";
import { Suspense } from "react";

function UserList() {
  const { usersPromise } = useLoaderData();
  return (
    <>
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        <Suspense
          fallback={Array.from(Array(6).keys()).map((e) => (
            <div key={e} className="card">
              <div className="card-header">
                <div
                  className="skeleton"
                  style={{
                    width: "15em",
                  }}
                />
              </div>
              <div className="card-body">
                <div
                  className="skeleton"
                  style={{
                    width: "15em",
                  }}
                />
                <div
                  className="skeleton"
                  style={{
                    width: "15em",
                  }}
                />
                <div
                  className="skeleton"
                  style={{
                    width: "15em",
                  }}
                />
              </div>
              <div className="card-footer">
                <div className="skeleton skeleton-btn" />
              </div>
            </div>
          ))}
        >
          <Await resolve={usersPromise}>
            {(users) =>
              users.map((user) => (
                <div key={user.id} className="card">
                  <div className="card-header">{user.name}</div>
                  <div className="card-body">
                    <div>{user.company.name}</div>
                    <div>{user.website}</div>
                    <div>{user.email}</div>
                  </div>
                  <div className="card-footer">
                    <Link className="btn" to={user.id.toString()}>
                      View
                    </Link>
                  </div>
                </div>
              ))
            }
          </Await>
        </Suspense>
      </div>
    </>
  );
}

function loader({ request: { signal } }) {
  return defer({ usersPromise: getUsers({ signal }) });
}

export const userListRoute = {
  loader,
  element: <UserList />,
};
