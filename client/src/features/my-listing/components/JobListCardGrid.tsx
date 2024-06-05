import { ComponentProps, Fragment, useMemo, useState } from "react";
import { Job } from "../constants/types";
import { JobListCard } from "./JobListCard";
import { deleteListing } from "../services/joblisting";
import { toast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { JOB_LISTING_DURATIONS } from "@backend/constants/types";
import { getJobListingPriceInCents } from "@backend/utils/getJobListingPriceInCents";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { formatDistanceStrict, isAfter } from "date-fns";
import { z } from "zod";
import { jobListingFormSchema } from "../constants/schemas";
import { Badge } from "@/components/ui/badge";

type JobListCardGridProps = {
  jobList: z.infer<typeof jobListingFormSchema>[];
} & ComponentProps<"div">;

const JobListCardGrid = ({ jobList }: JobListCardGridProps) => {
  const [deletedJobList, setDeletedJobList] = useState<Job["id"][]>([]);
  const visibleJobList = useMemo(
    () => jobList.filter((job) => !deletedJobList.includes(job.id)),
    [jobList, deletedJobList]
  );
  const [duration, setDuration] =
    useState<(typeof JOB_LISTING_DURATIONS)[number]>();

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

  return visibleJobList.map((job) => {
    const status = getJobListingStatus(job.expiresAt);

    return (
      <Fragment key={job.id}>
        <JobListCard
          job={job}
          headerDetails={
            <div>
              <Badge
                className="rounded"
                variant={getJobListingBadgeVariant(status)}
              >
                {status}
                {status === "Active" &&
                  job.expiresAt != null &&
                  ` - ${getDaysRemainingText(job.expiresAt)}`}
              </Badge>
            </div>
          }
          footerBtns={
            <>
              <Button variant="outline" asChild>
                <Link to={`/my-listing/edit/${job.id}`}>Edit</Link>
              </Button>
              <DeleteJobListingDialog
                deleteListing={() => {
                  deleteJob(job.id);
                }}
              />
              <Dialog
                open={duration != undefined}
                onOpenChange={() => {
                  setDuration(undefined);
                }}
              >
                <DialogContent>
                  <DialogTitle>
                    Extend {job.title} for {duration} days
                  </DialogTitle>
                  <DialogDescription>
                    This is a non refundable process.
                  </DialogDescription>
                </DialogContent>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button>{getPurchaseButtonText(status)}</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {JOB_LISTING_DURATIONS.map((duration) => (
                      <DropdownMenuItem
                        onClick={() => {
                          setDuration(duration);
                        }}
                      >
                        {duration} Days -
                        {getJobListingPriceInCents(duration) / 100}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </Dialog>
            </>
          }
        />
      </Fragment>
    );
  });
};

type DeleteJobListingDialogProps = {
  deleteListing: () => void;
};

const DeleteJobListingDialog = ({
  deleteListing,
}: DeleteJobListingDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this job listing?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your job
            lisitng and any remaining tume will not be refunded.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteListing}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default JobListCardGrid;

function getJobListingStatus(expiresAt: Date | null) {
  if (expiresAt == null) {
    return "Draft";
  } else if (isAfter(expiresAt, new Date())) {
    return "Active";
  } else {
    return "Expired";
  }
}

function getDaysRemainingText(expiresAt: Date) {
  return `${formatDistanceStrict(expiresAt, new Date(), { unit: "day" })} left`;
}

function getPurchaseButtonText(status: ReturnType<typeof getJobListingStatus>) {
  switch (status) {
    case "Draft":
      return "Publish";
    case "Active":
      return "Extend";
    case "Expired":
      return "Re-Publish";
  }
}

function getJobListingBadgeVariant(
  status: ReturnType<typeof getJobListingStatus>
) {
  switch (status) {
    case "Draft":
      return "secondary";
    case "Active":
      return "default";
    case "Expired":
      return "destructive";
  }
}
