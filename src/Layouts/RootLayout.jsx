import React from "react";
import { Outlet } from "react-router-dom";
import RootNav from "../Components/RootNav";

const RootLayout = () => {
  return (
    <div className="container m-auto">
      <RootNav />
      <div className="border-solid border-gray-400 border-2 rounded-md">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
