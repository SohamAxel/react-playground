import { z } from "zod";
import { jobListFilterSchema } from "./schemas";

export type JobListFilter = z.infer<typeof jobListFilterSchema>;
