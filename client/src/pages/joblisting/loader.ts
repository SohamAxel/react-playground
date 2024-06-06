import { getAllJobList } from "@/features/joblist";
import { getMyLists } from "@/features/my-listing";
import { deferredLoader } from "@/lib/reactRouter";

const loader = deferredLoader(() => {
  // return { joblistPromise: getAllJobList() };
  return { joblistPromise: getMyLists() };
});

export { loader };
