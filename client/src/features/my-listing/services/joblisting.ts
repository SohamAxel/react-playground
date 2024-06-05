import { baseApi } from "@/services/baseapi";
import { Job } from "../constants/types";
import { z } from "zod";
import { jobListingFormSchema } from "../constants/schemas";

export const getMyLists = () => {
  return baseApi
    .get("/job-listings/my-listings")
    .then((res) => z.array(jobListingFormSchema).parseAsync(res.data));
};

export const saveMyList = (job: Job) => {
  return baseApi
    .post("/job-listings", { ...job })
    .then((res) => jobListingFormSchema.parseAsync(res.data));
};

export const deleteListing = (id: Job["id"]) => {
  return baseApi.delete(`/job-listings/${id}`).then((res) => res.data);
};
