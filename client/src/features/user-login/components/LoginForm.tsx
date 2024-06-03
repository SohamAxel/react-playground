import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const UserForm = () => {
  const form = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              {console.log(field)}
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div id="action-buttons">
          <DialogTrigger asChild>
            <Button variant="ghost" onClick={() => hideUserModal()}>
              Cancel
            </Button>
          </DialogTrigger>
          <Button variant="ghost" onClick={() => hideUserModal()}>
            Sign up
          </Button>
          <Button variant="ghost" onClick={() => hideUserModal()}>
            Log In
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UserForm;
