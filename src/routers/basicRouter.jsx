import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Store from "../Pages/Store";
import Navbar from "../Components/Navbar";
import Team from "../Pages/Team";
import TeamMember from "../Pages/TeamMember";
import TeamMemberNav from "../Components/TeamMemberNav";
import NewTeamMember from "../Pages/NewTeamMember";

const NavbarLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
const TeamMemberLayout = () => {
  return (
    <>
      <TeamMemberNav />
      <Outlet />
    </>
  );
};
const basicRouter = createBrowserRouter([
  {
    element: <NavbarLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      {
        path: "/team",
        element: <TeamMemberLayout />,
        children: [
          { index: true, element: <Team /> },
          { path: ":memberName", element: <TeamMember /> },
          { path: "new", element: <NewTeamMember /> },
        ],
      },
    ],
  },
]);

export default basicRouter;
