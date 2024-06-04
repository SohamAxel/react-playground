import React, { ReactNode, createContext, useState } from "react";
import { Job } from "../constants/types";
import { saveMyList } from "../services/joblisting";
import { useNavigate } from "react-router-dom";

type MyListingContext = {
  jobList: Job[];
  saveJob: (job: Job) => Promise<void>;
  // editJob: (job: Job, jobId: React.Key) => Promise<void>;
  // getJob: () => Promise<void>;
};

type MyListingProviderProps = {
  children: ReactNode;
};

export const MyListingContext = createContext<MyListingContext | null>(null);

const MyListingProvider = ({ children }: MyListingProviderProps) => {
  const [jobList, setJobList] = useState<Job[]>([]);
  const navigate = useNavigate();

  const saveJob = (job: Job) => {
    return saveMyList(job).then((job) => {
      setJobList((currentJobList) => ({
        ...currentJobList,
        job,
      }));
      navigate("/my-listing");
    });
  };
  const editJob = () => {};
  const getJob = () => {};

  return (
    <MyListingContext.Provider value={{ jobList, saveJob }}>
      {children}
    </MyListingContext.Provider>
  );
};

export { MyListingProvider };
