import { Toaster } from "@/components/ui/toaster";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar";
import ThemeProvider from "@/contexts/ThemeProvider";
import CurrentUserProvider from "@/contexts/CurrentUserProvider";

export function RootLayout() {
  return (
    <ThemeProvider>
      <CurrentUserProvider>
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
      </CurrentUserProvider>
    </ThemeProvider>
  );
}