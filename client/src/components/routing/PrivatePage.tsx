import { LoadingSpinner } from "../ui/LoadingSpinner";
import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "@/features/user-login/hooks/useAuth";

export function PrivatePage({ children }: { children: ReactNode }) {
  const { user, isLoadingUser } = useAuth();
  const location = useLocation();

  if (isLoadingUser) return <LoadingSpinner className="w-24 h-24" />;

  if (user == null)
    return <Navigate to="/login" replace state={{ location }} />;

  return children;
}
