import { Await, useDeferredLoaderData } from "@/lib/reactRouter";
import { loader } from "./loader";
import { Suspense, useState } from "react";
import type { JobListFilter } from "@/features/joblist/constants/types";
import {
  JobListData,
  JobListDataSkeleton,
  JobListFilterComponent,
} from "@/features/joblist";

const DEFAULT_FILTER_VALUES: JobListFilter = {
  title: "",
  location: "",
  min_salary: 0,
  experience_lvl: undefined,
  showFavourites: false,
  showHidden: false,
  type: undefined,
};

const PublicJobListing = () => {
  const { joblistPromise } = useDeferredLoaderData<typeof loader>();
  const [jobListFilters, setJobListFilters] = useState<JobListFilter>(
    DEFAULT_FILTER_VALUES
  );
  console.log(jobListFilters);

  function updateFilterValues<T extends keyof JobListFilter>(
    key: T,
    value: JobListFilter[T]
  ) {
    setJobListFilters((oldFilterValue) => ({
      ...oldFilterValue,
      [key]: value,
    }));
  }

  function resetFilterValues() {
    setJobListFilters(DEFAULT_FILTER_VALUES);
  }

  return (
    <div>
      <JobListFilterComponent
        jobListFilters={jobListFilters}
        updateFilterValues={updateFilterValues}
        resetFilterValues={resetFilterValues}
      />
      <section className="mt-8 flex flex-col gap-4 sm:grid grid-cols-3">
        <Suspense fallback={<JobListDataSkeleton />}>
          <Await resolve={joblistPromise}>
            {(data) => {
              return (
                <JobListData jobList={data} jobListFilters={jobListFilters} />
              );
            }}
          </Await>
        </Suspense>
      </section>
    </div>
  );
};

export default PublicJobListing;
