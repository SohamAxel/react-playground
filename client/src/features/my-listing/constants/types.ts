import { jobListingFormSchema } from "@backend/constants/schemas/jobListings";
import { z } from "zod";

export type Job = z.infer<typeof jobListingFormSchema>;
