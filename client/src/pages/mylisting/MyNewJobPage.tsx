import { PageHeader } from "@/components/ui/PageHeader";
import { MyNewJobForm } from "@/features/my-listing";
import { Job } from "@/features/my-listing/constants/types";
import { saveMyList } from "@/features/my-listing/services/joblisting";
import { useNavigate } from "react-router-dom";

const MyNewJobPage = () => {
  const navigate = useNavigate();

  const submitNewJob = async (job: Omit<Job, "id">) => {
    await saveMyList(job).then((job) => {
      navigate("/my-listing");
    });
  };
  return (
    <div>
      <PageHeader>New Listing</PageHeader>
      <MyNewJobForm onSubmit={submitNewJob} />
    </div>
  );
};

export default MyNewJobPage;
