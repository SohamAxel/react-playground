import React from "react";
import { Outlet } from "react-router-dom";
import RootNav from "../Components/RootNav";

const RootLayout = () => {
  return (
    <>
      <RootNav />
      <Outlet />
    </>
  );
};

export default RootLayout;
