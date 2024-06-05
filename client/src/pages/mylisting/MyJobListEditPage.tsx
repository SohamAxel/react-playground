import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { PageHeader } from "@/components/ui/PageHeader";
import { MyNewJobForm, editMyList, getJobData } from "@/features/my-listing";
import { Job } from "@/features/my-listing/constants/types";
import { PrivatePage } from "@/components/routing/PrivatePage";

import {
  Await,
  deferredLoader,
  useDeferredLoaderData,
} from "@/lib/reactRouter";
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";

const MyJobListEditPage = () => {
  const navigate = useNavigate();
  const { dataPromise, id } = useDeferredLoaderData<typeof loader>();

  const submitEditJob = async (job: Omit<Job, "id">) => {
    await editMyList(job, id).then((job) => {
      navigate("/my-listing");
    });
  };

  return (
    <div>
      <PageHeader>Edit Listing</PageHeader>
      <Suspense fallback={<LoadingSpinner />}>
        <Await resolve={dataPromise}>
          {(data) => (
            <MyNewJobForm onSubmit={submitEditJob} initial_values={data} />
          )}
        </Await>
      </Suspense>
    </div>
  );
};

const loader = deferredLoader(({ params: { id } }) => {
  if (typeof id !== "string") throw new Response("Not Found", { status: 404 });
  return { dataPromise: getJobData(id), id };
});

const myJobListEditPageRoute = {
  loader,
  element: (
    <PrivatePage>
      <MyJobListEditPage />
    </PrivatePage>
  ),
};

export { myJobListEditPageRoute };
