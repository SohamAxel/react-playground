import { Outlet, useNavigation, ScrollRestoration } from "react-router-dom";

import Loader from "../Components/Loader";
import MainNavBar from "../Components/MainNavBar";

const RootLayout = () => {
  const { state } = useNavigation();
  const isLoading = state === "loading";

  return (
    <>
      <MainNavBar />
      {/* To restore the scroll a top when page changes */}
      <ScrollRestoration />
      {isLoading && <Loader />}
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
