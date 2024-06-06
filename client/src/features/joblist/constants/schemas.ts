import { jobListingFormSchema } from "@/features/my-listing";
import { z } from "zod";

export const jobListFilterSchema = z.object({
  title: jobListingFormSchema.shape.title,
  location: jobListingFormSchema.shape.location,
  min_salary: jobListingFormSchema.shape.salary,
  type: jobListingFormSchema.shape.type.optional(),
  experience_lvl: jobListingFormSchema.shape.experienceLevel.optional(),
  showFavourites: z.boolean(),
  showHidden: z.boolean(),
});
