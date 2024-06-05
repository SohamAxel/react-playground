import { z } from "zod";
import { jobListingFormSchema } from "./schemas";

export type Job = z.infer<typeof jobListingFormSchema>;
