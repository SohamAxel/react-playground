import { useContext } from "react";
import { ToastContext } from "../contexts/ToastMessageProvider";

export const useToast = () => {
  const value = useContext(ToastContext);
  if (value === null) {
    throw new Error("Content Must be within ToastMessageProvider");
  }

  return value;
};
