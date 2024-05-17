import { Outlet, useNavigation, ScrollRestoration } from "react-router-dom";

import Loader from "../Components/Loader";
import MainNavBar from "../Components/MainNavBar";

const RootLayout = () => {
  const { state } = useNavigation();
  return (
    <>
      <MainNavBar />
      {/* To restore the scroll a top when page changes */}
      <ScrollRestoration />
      <div className="container">
        {state === "loading" ? <Loader /> : <Outlet />}
      </div>
    </>
  );
};

export default RootLayout;
