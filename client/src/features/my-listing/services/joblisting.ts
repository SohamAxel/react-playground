import { baseApi } from "@/services/baseapi";
import { Job } from "../constants/types";

type completeJob = Job & {
  id: React.Key;
};

export const getMyLists = () => {
  return baseApi
    .get<completeJob[]>("/job-listings/my-listings")
    .then((res) => res.data);
};

export const saveMyList = (job: Job) => {
  return baseApi
    .post<completeJob>("/job-listings", { ...job })
    .then((res) => res.data);
};
