import { Button } from "@/components/ui/button";
import {
  JobListCard,
  JobListCardSkeleton,
  getMyLists,
} from "@/features/my-listing";
import { Job } from "@/features/my-listing/constants/types";
import {
  Await,
  deferredLoader,
  useDeferredLoaderData,
} from "@/lib/reactRouter";
import { Fragment, Suspense } from "react";
import { Link, defer, useLoaderData } from "react-router-dom";

type completeJob = Job & {
  id: React.Key;
};

const MyJobListPage = () => {
  const { dataPromise } = useDeferredLoaderData<typeof loader>();
  // @TODO: Check with vivek
  // const { dataPromise }: { dataPromise: completeJob[] } = useLoaderData();
  return (
    <>
      <section className="flex justify-between gap-4">
        <h3 className="text-4xl">My Job Lisitings</h3>
        <Button variant="outline" asChild>
          <Link to="new">Create Listing</Link>
        </Button>
      </section>
      <section className="grid grid-cols-3 gap-4 mt-5">
        <Suspense fallback={<PageSkeleton limit={10} />}>
          <Await resolve={dataPromise}>
            {(data) => {
              return data.map((job) => (
                <Fragment key={job.id}>
                  <JobListCard job={job} />
                </Fragment>
              ));
            }}
          </Await>
        </Suspense>
      </section>
    </>
  );
};

const PageSkeleton = ({ limit }: { limit: number }) => {
  const datas = Array.from(Array(limit).keys());
  return (
    <>
      {datas.map((data) => (
        <Fragment key={data}>
          <JobListCardSkeleton />
        </Fragment>
      ))}
    </>
  );
};

// const loader = () => {
//   return defer({ dataPromise: getMyLists() });
// };

export const loader = deferredLoader(() => {
  return { dataPromise: getMyLists() };
});

export const myJobListPageRoute = {
  element: <MyJobListPage />,
  loader,
};
