import { useContext } from "react";
import { MyListingContext } from "../contexts/MyListingProvider";

export const useJobList = () => {
  const data = useContext(MyListingContext);
  if (data === null) {
    throw new Error("Should be inside MyListingContext provider");
  }

  return data;
};
