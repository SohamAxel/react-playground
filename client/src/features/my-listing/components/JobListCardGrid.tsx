import React, { ComponentProps, Fragment, useMemo, useState } from "react";
import { Job } from "../constants/types";
import { JobListCard } from "./JobListCard";
import { deleteListing } from "../services/joblisting";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

type JobListCardGridProps = {
  jobList: Job[];
} & ComponentProps<"div">;

const JobListCardGrid = ({ jobList }: JobListCardGridProps) => {
  const [deletedJobList, setDeletedJobList] = useState<Job["id"][]>([]);
  const visibleJobList = useMemo(
    () => jobList.filter((job) => !deletedJobList.includes(job.id)),
    [jobList, deletedJobList]
  );

  const deleteJob = (id: Job["id"]) => {
    deleteListing(id)
      .then((res) => {
        setDeletedJobList((currentJobList) => [...currentJobList, id]);
      })
      .catch(() =>
        toast({
          title: "Failed to delete job listing",
          action: (
            <ToastAction altText="retry" onClick={() => deleteJob(id)}>
              Retry
            </ToastAction>
          ),
        })
      );
  };

  return visibleJobList.map((job) => (
    <Fragment key={job.id}>
      <JobListCard job={job} deleteJob={deleteJob} />
    </Fragment>
  ));
};

export default JobListCardGrid;
