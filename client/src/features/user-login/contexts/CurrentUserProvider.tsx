import { User } from "@/features/user-login/constants/types";
import { ReactNode, createContext, useState } from "react";
import {
  signup as signUpServer,
  login as loginServer,
  logout as logoutServer,
  getSession,
} from "../services/authentication";
import { useLocation, useNavigate } from "react-router-dom";

type CurrentUserContext = {
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  getSession: () => Promise<void>;
  isLoggedIn: boolean;
  isLoadingUser: boolean;
  user?: User;
};

export const CurrentUserContext = createContext<CurrentUserContext | null>(
  null
);

export const CurrentUserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const signup = (email: string, password: string) => {
    return signUpServer(email, password).then((user) => {
      setCurrentUser(user);
      navigate(location.state?.location ?? "/");
    });
  };
  const login = (email: string, password: string) => {
    return loginServer(email, password).then((user) => {
      console.log(user);
      setCurrentUser(user);
      console.log("logged in");
      navigate("/");
    });
  };
  const logout = () => {
    return logoutServer().then(() => {
      setCurrentUser(undefined);
      navigate(location.state?.login ?? "/");
    });
  };
  const getCurrentUserSession = () => {
    setIsLoadingUser(true);
    return getSession().then((user) => {
      setCurrentUser(user);
      navigate(location.state?.login ?? "/");
      setIsLoadingUser(false);
    });
  };

  return (
    <CurrentUserContext.Provider
      value={{
        signup,
        login,
        logout,
        getSession: getCurrentUserSession,
        isLoggedIn: currentUser != null,
        isLoadingUser,
        user: currentUser,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
