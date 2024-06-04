import { User } from "@/features/user-login/constants/types";
import { ReactNode, createContext, useState } from "react";
import { signup as signUpServer } from "../services/authentication";
import { useLocation, useNavigate } from "react-router-dom";

type CurrentUserContext = {
  // login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  // logout: () => Promise<void>;
  isLoggedIn: boolean;
  isLoadingUser: boolean;
  user?: User;
};

export const CurrentUserContext = createContext<CurrentUserContext | null>(
  null
);

export const CurrentUserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User>();
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const signup = (email: string, password: string) => {
    return signUpServer(email, password).then((user) => {
      setCurrentUser(user);
      navigate(location.state?.location ?? "/");
    });
  };
  const login = (email: string, password: string) => {};
  const logout = () => {};

  return (
    <CurrentUserContext.Provider
      value={{
        signup,
        // login,
        // logout,
        isLoggedIn: currentUser != null,
        isLoadingUser,
        user: currentUser,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
