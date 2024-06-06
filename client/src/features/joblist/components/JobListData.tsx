import { Job, JobListCard, JobListCardSkeleton } from "@/features/my-listing";
import { JobListFilter } from "../constants/types";
import { useMemo, useState } from "react";
import { Eye, EyeOff, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JobListingFullDialog } from "./JobListViewMoreDialog";

type JobListDataProps = {
  jobList: Job[];
  jobListFilters: JobListFilter;
};

export const JobListData = ({ jobList, jobListFilters }: JobListDataProps) => {
  const [hiddenJobs, setHiddenJobs] = useState<Job["id"][]>([]);
  const [favouriteJobs, setFavouriteJobs] = useState<Job["id"][]>([]);

  const filteredData = useMemo(() => {
    return jobList
      .filter((data) => {
        return data.title.includes(jobListFilters.title);
      })
      .filter((data) => {
        return data.location.includes(jobListFilters.location);
      })
      .filter((data) => {
        return data.salary > jobListFilters.min_salary;
      })
      .filter((data) => {
        if (jobListFilters.type == undefined) return true;
        return data.type === jobListFilters.type;
      })
      .filter((data) => {
        if (jobListFilters.experience_lvl === undefined) return true;
        return data.experienceLevel === jobListFilters.experience_lvl;
      })
      .filter((data) => {
        if (!jobListFilters.showHidden) {
          return !hiddenJobs.includes(data.id);
        }
        return true;
      })
      .filter((data) => {
        if (jobListFilters.showFavourites) {
          return favouriteJobs.includes(data.id);
        }
        return true;
      });
  }, [jobListFilters, jobList, hiddenJobs, favouriteJobs]);

  const handleHidden = (id: Job["id"]) => {
    setHiddenJobs((prevHiddenJob) => {
      const index = prevHiddenJob.indexOf(id);
      if (index !== -1) {
        return prevHiddenJob.filter((element) => element != id);
      } else {
        return [...prevHiddenJob, id];
      }
    });
  };
  const handleFavourite = (id: Job["id"]) => {
    setFavouriteJobs((prevFavouriteJob) => {
      const index = prevFavouriteJob.indexOf(id);
      if (index !== -1) {
        return prevFavouriteJob.filter((element) => element != id);
      } else {
        return [...prevFavouriteJob, id];
      }
    });
  };

  return filteredData.map((job) => (
    <JobListCard
      job={job}
      key={job.id}
      headerBtns={
        <div className="flex gap-2">
          <Button
            variant="ghost"
            className="p-1"
            onClick={() => handleHidden(job.id)}
          >
            {hiddenJobs.includes(job.id) ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </Button>
          <Button
            variant="ghost"
            className="p-1"
            onClick={() => handleFavourite(job.id)}
          >
            {favouriteJobs.includes(job.id) ? (
              <Heart size={18} color="red" />
            ) : (
              <Heart size={18} />
            )}
          </Button>
        </div>
      }
      footerBtns={<JobListingFullDialog jobList={job} />}
    />
  ));
};

type JobListCardSkeletonProps = {
  limit?: number;
};
export const JobListDataSkeleton = ({
  limit = 6,
}: JobListCardSkeletonProps) => {
  const dummyData = Array.from(Array(limit).keys());
  return dummyData.map((data) => <JobListCardSkeleton key={data} />);
};
