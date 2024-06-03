import { Button } from "@/components/ui/button";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
