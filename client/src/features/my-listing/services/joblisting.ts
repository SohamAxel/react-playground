import { baseApi } from "@/services/baseapi";
import { Job } from "../constants/types";
import { z } from "zod";
import { jobListingFormSchema } from "../constants/schemas";
import { JOB_LISTING_DURATIONS } from "@backend/constants/types";

export const getMyLists = () => {
  return baseApi
    .get("/job-listings/my-listings")
    .then((res) => z.array(jobListingFormSchema).parseAsync(res.data));
};

export const saveMyList = (job: Omit<Job, "id">) => {
  return baseApi
    .post("/job-listings", { ...job })
    .then((res) => jobListingFormSchema.parseAsync(res.data));
};

export const editMyList = (job: Omit<Job, "id">, id: Job["id"]) => {
  return baseApi
    .put(`/job-listings/${id}`, { ...job })
    .then((res) => jobListingFormSchema.parseAsync(res.data));
};
export const getJobData = (id: Job["id"]) => {
  return baseApi
    .get(`/job-listings/${id}`)
    .then((res) => jobListingFormSchema.parseAsync(res.data));
};

export const deleteListing = (id: Job["id"]) => {
  return baseApi.delete(`/job-listings/${id}`).then((res) => res.data);
};

export function createPublishPaymentIntent(
  id: Job["id"],
  duration: (typeof JOB_LISTING_DURATIONS)[number]
) {
  return baseApi
    .post<{ clientSecret: string }>(
      `/job-listings/${id}/create-publish-payment-intent`,
      {
        duration,
      }
    )
    .then((res) => res.data);
}
