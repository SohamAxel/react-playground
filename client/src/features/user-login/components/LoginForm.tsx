import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { signupSchema } from "@backend/constants/schemas/users";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type formSchema = z.infer<typeof signupSchema>;

export const LoginForm = () => {
  const form = useForm<formSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {},
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col w-full gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <div id="action-buttons">
              <Button asChild variant="ghost">
                <Link to="/">Cancel</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/signup">Sign up</Link>
              </Button>
              <Button
                type="submit"
                variant="outline"
                disabled={
                  !form.formState.isValid || form.formState.isSubmitting
                }
              >
                Login
              </Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};
