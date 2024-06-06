import { jobListingFormSchema } from "@/features/my-listing";
import { baseApi } from "@/services/baseapi";
import { z } from "zod";

export const getAllJobList = () => {
  return baseApi
    .get("/job-listings/published")
    .then((jobListResponse) =>
      z.array(jobListingFormSchema).parse(jobListResponse.data)
    );
};
