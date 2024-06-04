import { Toaster } from "@/components/ui/toaster";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar";
import ThemeProvider from "@/contexts/ThemeProvider";
import { CurrentUserProvider } from "@/features/user-login";
import { MyListingProvider } from "@/features/my-listing";

export function RootLayout() {
  return (
    <ThemeProvider>
      <CurrentUserProvider>
        <MyListingProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="container my-4 flex-grow grid grid-cols-1">
              <div>
                <Outlet />
              </div>
            </div>
          </div>
          <ScrollRestoration />
          <Toaster />
        </MyListingProvider>
      </CurrentUserProvider>
    </ThemeProvider>
  );
}
