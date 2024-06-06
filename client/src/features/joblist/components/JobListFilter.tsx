import { Input } from "@/components/ui/input";
import { JobListFilter } from "../constants/types";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  JOB_LISTING_EXPERIENCE_LEVELS,
  JOB_LISTING_TYPES,
} from "@backend/constants/types";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface JobListFilterProps {
  jobListFilters: JobListFilter;
  updateFilterValues<T extends keyof JobListFilter>(
    key: T,
    value: JobListFilter[T]
  ): void;
  resetFilterValues(): void;
}

export const JobListFilterComponent = ({
  jobListFilters,
  updateFilterValues,
  resetFilterValues,
}: JobListFilterProps) => {
  return (
    <>
      {" "}
      <section className="flex flex-col gap-4 sm:grid grid-cols-3">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            name="title"
            value={jobListFilters.title}
            onChange={(e) => updateFilterValues("title", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            type="text"
            name="location"
            value={jobListFilters.location}
            onChange={(e) => updateFilterValues("location", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="min_salary">Minimum Salary</Label>
          <Input
            type="number"
            name="min_salary"
            value={jobListFilters.min_salary}
            onChange={(e) =>
              updateFilterValues("min_salary", e.target.valueAsNumber)
            }
          />
        </div>
      </section>
      <section className="mt-5 flex flex-col gap-4 sm:grid grid-cols-3">
        <div>
          <Label htmlFor="type">Job Type</Label>
          <Select
            name="type"
            onValueChange={(e) => {
              updateFilterValues("type", e);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {JOB_LISTING_TYPES.map((type) => (
                  <SelectItem value={type} key={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="experience_lvl">Experience Level</Label>
          <Select
            name="experience_lvl"
            onValueChange={(e) => updateFilterValues("experience_lvl", e)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {JOB_LISTING_EXPERIENCE_LEVELS.map((type) => (
                  <SelectItem value={type} key={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-end justify-between">
          <section className="flex flex-col gap-2">
            <div>
              <Checkbox
                id="showHidden"
                checked={jobListFilters.showHidden}
                onCheckedChange={(e) => {
                  if (typeof e === "boolean") {
                    updateFilterValues("showHidden", e);
                  }
                }}
              />
              <label
                htmlFor="showHidden"
                className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Show Hidden
              </label>
            </div>
            <div>
              <Checkbox
                id="showFavourites"
                checked={jobListFilters.showFavourites}
                onCheckedChange={(e) => {
                  if (typeof e === "boolean") {
                    updateFilterValues("showFavourites", e);
                  }
                }}
              />
              <label
                htmlFor="showFavourites"
                className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Show Favourites
              </label>
            </div>
          </section>
          <section>
            <Button onClick={() => resetFilterValues()}>Reset</Button>
          </section>
        </div>
      </section>
    </>
  );
};
