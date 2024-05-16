import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Store from "./Pages/Store";
import Navbar from "./Components/Navbar";
import Team from "./Pages/Team";
import TeamMember from "./Pages/TeamMember";
import TeamMemberNav from "./Components/TeamMemberNav";

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
const router = createBrowserRouter([
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
          { path: "pam", element: <TeamMember name="Pam" /> },
          { path: "jim", element: <TeamMember name="Jim" /> },
        ],
      },
    ],
  },
]);

export default router;
