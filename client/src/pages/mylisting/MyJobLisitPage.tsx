import { Button } from "@/components/ui/button";
import { getMyLists } from "@/features/my-listing";
import { Job } from "@/features/my-listing/constants/types";
import { Suspense } from "react";
import { Await, Link, defer, useLoaderData } from "react-router-dom";

type completeJob = Job & {
  id: React.Key;
};

const MyJobListPage = () => {
  const { dataPromise } = useLoaderData() as { dataPromise: completeJob[] };
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
      <section>
        <Suspense fallback="Loading123...">
          <Await resolve={dataPromise}>
            {(data) => {
              console.log(data);
              return "ABC";
            }}
          </Await>
        </Suspense>
      </section>
    </>
  );
};

const loader = () => {
  return defer({ dataPromise: getMyLists() });
};

export const myJobListPageRoute = {
  element: <MyJobListPage />,
  loader,
};
