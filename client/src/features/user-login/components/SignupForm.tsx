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
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signupSchema } from "@backend/constants/schemas/users";

type SignupValues = z.infer<typeof signupSchema>;

const SignupForm = () => {
  console.log(signupSchema);
  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {},
  });

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
            <Button variant="ghost">Cancel</Button>
          </DialogTrigger>
          <Button variant="ghost">Sign up</Button>
          <Button variant="ghost">Log In</Button>
        </div>
      </form>
    </Form>
  );
};

export default SignupForm;
