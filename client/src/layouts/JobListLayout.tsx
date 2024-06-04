import { useAuth } from "@/features/user-login/hooks/useAuth";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const JobListLayout = () => {
  const { user, isLoadingUser } = useAuth();

  if (isLoadingUser) {
    return "Loading";
  } else {
    if (!user) {
      return <Navigate to="/login" />;
    } else {
      return <Outlet />;
    }
  }
};

export default JobListLayout;
