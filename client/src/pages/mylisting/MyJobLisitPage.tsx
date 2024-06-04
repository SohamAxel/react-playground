import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MyJobLisitPage = () => {
  return (
    <section className="flex justify-between gap-4">
      <h3 className="text-4xl">My Job Lisitings</h3>
      <Button variant="outline" asChild>
        <Link to="new">Create Listing</Link>
      </Button>
    </section>
  );
};

export default MyJobLisitPage;
