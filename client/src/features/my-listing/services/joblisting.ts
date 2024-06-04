import { baseApi } from "@/services/baseapi";
import { Job } from "../constants/types";

export const getMyListing = () => {
  return baseApi.get<Job[]>("/job-listings/my-listing").then((res) => res.data);
};

export const saveMyList = (job: Job) => {
  return baseApi.post<Job>("/job-listings", { ...job }).then((res) => res.data);
};
