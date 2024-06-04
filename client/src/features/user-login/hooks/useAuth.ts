import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";

export const useAuth = () => {
  const userProvider = useContext(CurrentUserContext);

  if (userProvider === null) {
    throw new Error("Component must be inside provider");
  }
  return userProvider;
};
