import { User } from "@/features/user-login/constants/types";
import { ReactNode, createContext, useEffect, useState } from "react";
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

  useEffect(() => {
    setIsLoadingUser(true);
    getSession()
      .then((user) => {
        setCurrentUser(user);
      })
      .finally(() => {
        setIsLoadingUser(false);
      });
  }, []);

  const signup = (email: string, password: string) => {
    return signUpServer(email, password).then((user) => {
      setCurrentUser(user);
      navigate(location.state?.location ?? "/");
    });
  };
  const login = (email: string, password: string) => {
    return loginServer(email, password).then((user) => {
      setCurrentUser(user);
      navigate(location.state?.location ?? "/");
    });
  };
  const logout = () => {
    return logoutServer().then(() => {
      setCurrentUser(undefined);
      navigate(location.state?.login ?? "/");
    });
  };

  return (
    <CurrentUserContext.Provider
      value={{
        signup,
        login,
        logout,
        isLoggedIn: currentUser != null,
        isLoadingUser,
        user: currentUser,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
