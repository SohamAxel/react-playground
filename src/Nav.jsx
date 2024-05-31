import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";

const Nav = () => {
  const { state } = useNavigation();

  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/posts"}>Posts</Link>
      </nav>
      {/* {state === "loading" ? "loading" : <Outlet />} */}
      <Outlet />
    </>
  );
};

export default Nav;
