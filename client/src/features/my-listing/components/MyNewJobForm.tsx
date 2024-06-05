import { zodResolver } from "@hookform/resolvers/zod";
import { jobListingFormSchema } from "@backend/constants/schemas/jobListings";
import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
  PathValue,
  useForm,
} from "react-hook-form";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { HTMLInputTypeAttribute } from "react";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { useJobList } from "../hooks/useJobList";

type Job = z.infer<typeof jobListingFormSchema>;

type MyNewJobFormProps = {
  onSubmit: (job: Job) => void;
  initial_values?: Job;
};

const DEFAULT_VALUES = {
  title: "",
  companyName: "",
  location: "",
  applyUrl: "",
  salary: NaN,
  type: JOB_LISTING_TYPES[1],
  experienceLevel: JOB_LISTING_EXPERIENCE_LEVELS[1],
  shortDescription: "",
  description: "",
};

const MyNewJobForm = ({
  onSubmit,
  initial_values = DEFAULT_VALUES,
}: MyNewJobFormProps) => {
  const form = useForm<Job>({
    resolver: zodResolver(jobListingFormSchema),
    defaultValues: initial_values,
  });

  const handleFormSubmit = (data: Job) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <div className="flex flex-col sm:flex-row justify-evenly w-full gap-4">
          <TextFormField
            control={form.control}
            label="Title"
            name="title"
            className="w-full"
          />
          <TextFormField
            control={form.control}
            label="Company Name"
            name="companyName"
            className="w-full"
          />
          <TextFormField
            control={form.control}
            label="Location"
            name="location"
            className="w-full"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-evenly w-full gap-4">
          <TextFormField
            control={form.control}
            label="Application URL"
            name="applyUrl"
            className="w-full"
          />
          <SelectFormField
            control={form.control}
            name="type"
            label="Type"
            className="w-full"
            options={JOB_LISTING_TYPES}
          />
          <SelectFormField
            control={form.control}
            name="experienceLevel"
            label="Experience Level"
            className="w-full"
            options={JOB_LISTING_EXPERIENCE_LEVELS}
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-evenly w-full gap-4">
          <TextFormField
            control={form.control}
            label="Salary"
            name="salary"
            type="number"
            className="w-full sm:w-1/3"
          />
          <TextAreaFormField
            control={form.control}
            label="Short Description"
            name="shortDescription"
            className="w-full sm:w-2/3"
            description="Max 200 characters"
          />
        </div>
        <TextAreaFormField
          control={form.control}
          label="Full Description"
          name="description"
          className="w-full"
          description="Supports full Markdown"
        />
        <div id="action-buttons" className="flex justify-end gap-4">
          <Button variant="outline">Show Preview</Button>
          <Button
            disabled={!form.formState.isValid || form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? <LoadingSpinner /> : "Save"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

// @TODO: Update classname type.

type SelectFormFieldProps<T extends FieldValues> = {
  label: string;
  control: Control<T>;
  name: Path<T>;
  options: readonly PathValue<T, Path<T>>[];
  className?: string;
};

type TextFormFieldProps<T extends FieldValues> = Omit<
  SelectFormFieldProps<T>,
  "options"
> & {
  type?: HTMLInputTypeAttribute;
};

type TextAreaFormFieldProps<T extends FieldValues> = Omit<
  SelectFormFieldProps<T>,
  "options"
> & {
  description: string;
};

function SelectFormField<T extends FieldValues>({
  label,
  control,
  name,
  options,
  className,
}: SelectFormFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <Select
            onValueChange={(val) =>
              field.onChange(val as PathValue<T, Path<T>>)
            }
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

// @TODO: Need help with resolving the type script
function TextFormField<T extends FieldValues>({
  label,
  control,
  name,
  className,
  type,
}: TextFormFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }: { field: ControllerRenderProps<T> }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          {type == "number" ? (
            <Input
              type="number"
              {...field}
              onChange={(e) =>
                field.onChange(e.target.valueAsNumber as PathValue<T, Path<T>>)
              }
              value={isNaN(field.value) ? "" : field.value}
            />
          ) : (
            <Input {...field} />
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
function TextAreaFormField<T extends FieldValues>({
  label,
  control,
  name,
  description,
  className,
}: TextAreaFormFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export { MyNewJobForm };
