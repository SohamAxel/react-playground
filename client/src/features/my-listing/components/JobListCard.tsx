import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Job } from "../constants/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
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
import { deleteListing } from "../services/joblisting";
import { useState } from "react";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

type JobListCard = {
  job: Job;
  deleteJob: (id: Job["id"]) => void;
};

const JobListCard = ({ job, deleteJob }: JobListCard) => {
  const [isDeleting, setIsDeleting] = useState(false);
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
        <CardDescription className="flex flex-col">
          <span>{job.companyName}</span>
          <span>{job.location}</span>
        </CardDescription>
        <section>
          <Badge variant="secondary">${job.salary}</Badge>
          <Badge variant="secondary">{job.type}</Badge>
          <Badge variant="secondary">{job.experienceLevel}</Badge>
        </section>
      </CardHeader>
      <CardContent>{job.shortDescription}</CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" asChild>
          <Link to={`/my-listing/edit/${job.id}`}>Edit</Link>
        </Button>
        <DeleteJobListingDialog
          deleteListing={() => {
            deleteJob(job.id);
          }}
        />
        <Button>Publish</Button>
      </CardFooter>
    </Card>
  );
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

const JobListCardSkeleton = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-7 w-[200px]" />
        </CardTitle>
        <section className="flex flex-col gap-1">
          <span>
            <Skeleton className="h-2 w-[100px]" />
          </span>
          <span>
            <Skeleton className="h-2 w-[100px]" />
          </span>
        </section>
        <section className="">
          <Badge variant="secondary">
            <Skeleton className="h-4 w-[50px]" />
          </Badge>
          <Badge variant="secondary">
            <Skeleton className="h-4 w-[50px]" />
          </Badge>
          <Badge variant="secondary">
            <Skeleton className="h-4 w-[50px]" />
          </Badge>
        </section>
      </CardHeader>
      <CardContent>
        {" "}
        <Skeleton className="h-[125px] w-full rounded-xl" />
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Delete</Button>
        <Button variant="outline">Edit</Button>
        <Button>Publish</Button>
      </CardFooter>
    </Card>
  );
};

export { JobListCard, JobListCardSkeleton };
